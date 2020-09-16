import React from 'react'

import Icon from '../Icon'

const HomeHeader = () => (
  <header className="main-header">
    <div className="header-top-bar"></div>
    <div className="header-brand">
      <Icon name="logo" className="header-logo" />

      <h1 className="header-title">
        Fun<strong>Bataille</strong>
      </h1>
    </div>
  </header>
)

export default HomeHeader
