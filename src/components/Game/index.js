import React, { useEffect, useState, useRef } from 'react'

import { cards } from '../../constants/game'
import { shuffle } from '../../helpers/game'

import BackButton from '../BackButton'

import Seat from './Seat'

const Game = () => {
  const canPlay = useRef(true)
  const [northDeck, setNorthDeck] = useState([])
  const [southDeck, setSouthDeck] = useState([])

  useEffect(() => {
    const deal = shuffle(cards)
    setNorthDeck(deal.slice(0, 26))
    setSouthDeck(deal.slice(26, 52))
  }, [])

  const processTrick = index => {
    const northCard = northDeck.slice(index)[0]
    const southCard = southDeck.slice(index)[0]

    northCard.cardState = index % 2 === -1 ? 'inPlay' : 'inPlayHidden'
    southCard.cardState = index % 2 === -1 ? 'inPlay' : 'inPlayHidden'

    setNorthDeck([...northDeck.slice(0, index), northCard])
    setSouthDeck([...southDeck.slice(0, index), southCard])

    setTimeout(() => {
      if (index % 2 === 0 || northCard.hexValue === southCard.hexValue) {
        processTrick(index - 1)
      } else {
        if (northCard.hexValue > southCard.hexValue) {
          southCard.cardState = 'inPlayLose'
        } else {
          northCard.cardState = 'inPlayLose'
        }

        setNorthDeck(
          [...northDeck.slice(0, index), northCard],
          [...northDeck.slice(index + 1)]
        )
        setSouthDeck(
          [...southDeck.slice(0, index), southCard],
          [...southDeck.slice(index + 1)]
        )

        setTimeout(() => {
          let newNorthDeck
          let newSouthDeck

          if (northCard.hexValue > southCard.hexValue) {
            newNorthDeck = [
              ...southDeck
                .slice(index)
                .map(c => ({ ...c, cardState: 'played-lose' })),
              ...northDeck
                .slice(index)
                .map(c => ({ ...c, cardState: 'played-win' })),
              ...northDeck.slice(0, index),
            ]
            newSouthDeck = [...southDeck.slice(0, index)]
          } else {
            newNorthDeck = [...northDeck.slice(0, index)]
            newSouthDeck = [
              ...northDeck
                .slice(index)
                .map(c => ({ ...c, cardState: 'played-lose' })),
              ...southDeck
                .slice(index)
                .map(c => ({ ...c, cardState: 'played-win' })),
              ...southDeck.slice(0, index),
            ]
          }

          setNorthDeck(newNorthDeck)
          setSouthDeck(newSouthDeck)
          canPlay.current = true
        }, 500)
      }
    }, 500)
  }

  const playCard = () => {
    if (canPlay.current) {
      canPlay.current = false
      processTrick(-1)
    }
  }

  return (
    <div>
      <div style={{ position: 'absolute', top: '50%' }}>
        <BackButton />
      </div>
      <div className="table">
        <Seat player="N" deck={northDeck} />
        <Seat player="S" deck={southDeck} playCard={playCard} />
      </div>
    </div>
  )
}

export default Game
