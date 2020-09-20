import React from 'react'

import Card from './Card'

const Seat = ({ player, deck, playCard }) => (
  <div className={`seat seat-${player}`}>
    {deck.map((card, i) => (
      <Card
        key={card.card}
        zIndex={i}
        player={player}
        faceSide="faceDown"
        cardState="deck"
        playCard={playCard}
        {...card}
      />
    ))}
    <div className="seat-infos">
      {player}: {deck.length}
    </div>
  </div>
)

export default Seat
