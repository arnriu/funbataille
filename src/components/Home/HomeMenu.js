import React from 'react'

import HomeMenuItem from './HomeMenuItem'

const HomeMenu = () => (
  <nav className="home-menu">
    <ul className="home-menu-list">
      <HomeMenuItem to="/game" label="Jouer" icon="cards" />
      <HomeMenuItem to="/settings" label="Paramètres" icon="settings" />
      <HomeMenuItem
        to="https://play.funbridge.com"
        label="FunBridge"
        icon="fb"
      />
    </ul>
  </nav>
)

export default HomeMenu
