import React from 'react'

const Header = props => {
  return (
    <header className='main-header'>
      <a href='/#/' className='logo'>
        <span className='logo-mini'><b>Pay</b>Cy</span>
        <span className='logo-lg'>
          <i className='fa fa-money'></i>
          <b>Payment</b> Cycle
        </span>
      </a>
      <nav className='navbar navbar-static-top'>
        <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
      </nav>
    </header>
  )
}

export default Header
