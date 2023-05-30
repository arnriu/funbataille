import Icon from '../Icon'

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
      <div className="avatar">
        <Icon id={player === 'N' ? 'logo' : 'avatar'} />
      </div>
      {player}: {deck.length}
    </div>
  </div>
)

export default Seat
