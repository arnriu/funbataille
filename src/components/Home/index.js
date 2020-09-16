import React from 'react'

import Icon from '../Icon'

import HomeHeader from './HomeHeader'
import HomeMenu from './HomeMenu'
import HomeFooter from './HomeFooter'

const Home = () => (
  <div className="home">
    <HomeHeader />

    <div className="main-body">
      <div className="logo-bg">
        <Icon name="logo" />
      </div>

      <HomeMenu />
    </div>

    <HomeFooter />
  </div>
)

export default Home
