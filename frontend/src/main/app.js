import '../common/templates/dependencies'
import React from 'react'
import Header from '../common/templates/header'
import SideBar from '../common/templates/SideBar'
import Footer from '../common/templates/Footer'

const App = props => (
  <div className='wrapper'>
    <Header />
    <SideBar />
    <div className='content-wrapper'>
      <h1>Content</h1>
    </div>
    <Footer />
  </div>
)

export default App
