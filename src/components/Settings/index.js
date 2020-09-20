import React from 'react'

import Icon from '../Icon'
import BackButton from '../BackButton'
import Header from '../Header'
import Footer from '../Footer'

const Home = () => (
  <div className="home">
    <Header label="Settings" icon="settings" />

    <div className="main-body">
      <div className="logo-bg">
        <Icon name="logo" />
      </div>

      <BackButton />      
    </div>

    <Footer />
  </div>
)

export default Home
