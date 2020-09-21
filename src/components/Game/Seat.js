import Icon from '../Icon'

import Card from './Card'

const Seat = ({ player, deck, playCard }) => (
  <div className={`seat seat-${player}`}>
    {/* TODO Afficher les cartes */}

    <div className="seat-infos">
      <div className="avatar">
        <Icon id={player === 'N' ? 'logo' : 'avatar'} />
      </div>
      {player}: {deck.length}
    </div>
  </div>
)

export default Seat
