import React from 'react'

import Icon from '../Icon'
import Header from '../Header'
import Footer from '../Footer'

import HomeMenu from './HomeMenu'

const Home = () => (
  <div className="home">
    <Header label="FunBataille" icon="logo" />

    <div className="main-body">
      <div className="logo-bg">
        <Icon name="logo" />
      </div>

      <HomeMenu />
    </div>

    <Footer />
  </div>
)

export default Home
