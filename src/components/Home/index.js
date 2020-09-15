import React from 'react'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Cards } from '../../assets/cards.svg'
import { ReactComponent as Settings } from '../../assets/settings.svg'
import { ReactComponent as Fb } from '../../assets/fb.svg'

const Home = () => (
  <div className="home">
    <header className="main-header">
      <div className="header-top-bar"></div>
      <div className="header-brand">
        <Logo className="header-logo" />
        <h1 className="header-title">
          Fun<strong>Bataille</strong>
        </h1>
      </div>
    </header>

    <div className="main-body">
      <div className="logo-bg">
        <Logo className="header-logo" />
      </div>

      <nav className="home-menu">
        <ul className="home-menu-list">
          <li className="home-menu-item">
            <button>
              <Cards className="home-menu-icon" />
              Jouer
            </button>
          </li>
          <li className="home-menu-item">
            <button>
              {' '}
              <Settings className="home-menu-icon" />
              Paramètres
            </button>
          </li>
          <li className="home-menu-item">
            <button>
              <Fb className="home-menu-icon" />
              FunBridge
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <footer className="main-footer">
      <span role="img" aria-label="mamie">
        👵
      </span>{' '}
      Parce que le bridge, c'est pour les vieux...{' '}
      <span role="img" aria-label="papy">
        👴
      </span>
    </footer>
  </div>
)

export default Home
