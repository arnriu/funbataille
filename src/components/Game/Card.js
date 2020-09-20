import React, { useEffect, useState, useCallback } from 'react'

import cardBack from '../../assets/backs/blue.svg'

const cardsAssets = require.context('../../assets/cards')

const Card = ({ card, zIndex, player, cardState, playCard }) => {
  const [faceSide, setFaceSide] = useState('faceDown')

  useEffect(() => {
    setFaceSide(
      ['inPlay', 'inPlayLose', 'played-lose', 'played-win'].includes(cardState)
        ? 'faceUp'
        : 'faceDown'
    )
  }, [cardState])

  const handleClick = useCallback(() => {
    typeof playCard === 'function' && playCard()
  }, [playCard])

  return (
    <div
      className={`card card-${player} card-${cardState}`}
      onClick={handleClick}
      style={{
        zIndex: 
        ['inPlay', 'inPlayLose', 'inPlayHidden'].includes(cardState) ? 400 - zIndex :
          ['played-win'].includes(cardState)
          ? 200 - zIndex
          : zIndex,
      }}
    >
      <img
        src={
          faceSide === 'faceDown'
            ? cardBack
            : cardsAssets(`./${card}-fr-2c.svg`)
        }
        alt={card}
      />
    </div>
  )
}

export default Card
