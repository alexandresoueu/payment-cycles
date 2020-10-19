import '../common/templates/dependencies'
import React from 'react'
import Header from '../common/templates/header'
import SideBar from '../common/templates/SideBar'
import Footer from '../common/templates/Footer'
import Messages from '../common/msg/Messages'

const App = props => (
  <div className='wrapper'>
    <Header />
    <SideBar />
    <div className='content-wrapper'>
      {props.children}
    </div>
    <Footer />
    <Messages />
  </div>
)

export default App
