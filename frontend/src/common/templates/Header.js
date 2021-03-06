import React from 'react'
import Navbar from '../templates/Navbar'

const Header = props => {
  return (
    <header className='main-header'>
      <a href='/#/' className='logo'>
        <span className='logo-mini'><b>Pay</b>Cy</span>
        <span className='logo-lg'>
          <i className='fa fa-money' />
          <b>Payment</b> Cycle
        </span>
      </a>
      <nav className='navbar navbar-static-top'>
        <a href className='sidebar-toggle' data-toggle='offcanvas' />
        <Navbar />
      </nav>
    </header>
  )
}

export default Header
