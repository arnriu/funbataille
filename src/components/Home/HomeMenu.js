import HomeMenuItem from './HomeMenuItem'

const HomeMenu = () => (
  <nav className="home-menu">
    <div className="home-menu-list">
      <div className="home-menu-row">
        <HomeMenuItem to="/game" label="Jouer" icon="cards" />
        <HomeMenuItem to="/settings" label="Paramètres" icon="settings" />
      </div>
      <div className="home-menu-row">
        <HomeMenuItem to="/account" label="Compte" icon="logo" />
        <HomeMenuItem
          to="https://play.funbridge.com"
          label="FunBridge"
          icon="fb"
        />
      </div>
    </div>
  </nav>
)

export default HomeMenu
