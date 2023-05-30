import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Game from './components/Game'
import Settings from './components/Settings'
import Account from './components/Account'
import { SVGSource } from './components/Icon'

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="game" element={<Game />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <SVGSource />
  </>
)

export default App
