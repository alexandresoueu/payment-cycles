import '../common/templates/dependencies'
import React from 'react'
import Header from '../common/templates/header'
import SideBar from '../common/templates/SideBar'
import Footer from '../common/templates/Footer'
import Routes from './Routes'

const App = props => (
  <div className='wrapper'>
    <Header />
    <SideBar />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
  </div>
)

export default App
