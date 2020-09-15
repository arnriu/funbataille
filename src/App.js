import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Game from './components/Game'
import Settings from './components/Settings'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
