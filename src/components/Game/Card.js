import React, { useEffect, useState, useCallback } from 'react'

import cardBack from '../../assets/backs/blue.svg'

const cardsAssets = require.context('../../assets/cards')

const Card = ({ card, hexValue, zIndex, player, cardState, playCard }) => {
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
  }, [playCard, card, hexValue])

  return (
    <div
      className={`card card-${player} card-${cardState}`}
      onClick={handleClick}
      style={{
        zIndex,
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
