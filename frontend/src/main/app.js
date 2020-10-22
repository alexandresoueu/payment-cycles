import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../common/templates/header'
import SideBar from '../common/templates/SideBar'
import Footer from '../common/templates/Footer'
import Messages from '../common/msg/Messages'

import Routes from './Routes'

const App = props => (
  <HashRouter>
    <div className='wrapper'>
      <Header />
      <SideBar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </HashRouter>
)

export default App
