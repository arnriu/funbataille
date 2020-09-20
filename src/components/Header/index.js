import React from 'react'

import Icon from '../Icon'

const HomeHeader = ({label, icon}) => (
  <header className="main-header">
    <div className="header-top-bar"></div>
    <div className="header-brand">
      <Icon name={icon ?? "logo"} className="header-icon" />

      <h1 className="header-title">
        {label ?? "Titre"}
      </h1>
    </div>
  </header>
)

export default HomeHeader
