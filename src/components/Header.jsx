import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='headerMenu'>
        <Link to='/'><img src='./public/logo.png' alt='logo' /></Link>
        <input type='search' />
        <Link to='/profile'>Profile</Link>        
      </div>
    </header>
  )
}

export default Header