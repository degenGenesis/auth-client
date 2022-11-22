import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

import logo from '../../src/assets/logo1.png';

const Header = () => {
  return (
    <header>
      <div className='headerMenu'>
        <Link to='/' className='nav-link'>
          <img className='logo' 
            src={logo} alt='logo' />
        </Link>
        <SearchBar />
        <Link to='/profile' className='menu-toggle'>≣</Link>        
      </div>
    </header>
  )
}

export default Header