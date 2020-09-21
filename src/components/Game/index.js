import React, { useEffect, useState, useRef } from 'react'

import { cards } from '../../constants/game'
import { shuffle } from '../../helpers/game'

import BackButton from '../BackButton'
import Icon from '../Icon'

import Seat from './Seat'

const Game = () => {
  const canPlay = useRef(true)
  const [northDeck, setNorthDeck] = useState([])
  const [southDeck, setSouthDeck] = useState([])

  useEffect(() => {
    // TODO Faire la distrib
  }, [])

  const processTrick = index => {
    // TODO gérer le déroulement du jeu
  }

  const playCard = () => {
    // TODO au click sur une carte
  }

  return (
    <div>
      <div style={{ position: 'absolute', top: '50%', zIndex: 10 }}>
        <BackButton />
      </div>
      <div className="table">
        <div className="table-bg">
          <Icon id="logo" />
        </div>
        <Seat player="N" deck={northDeck} />
        <Seat player="S" deck={southDeck} playCard={playCard} />
      </div>
    </div>
  )
}

export default Game
