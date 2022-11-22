import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='siteNav'>
        <ul>
          <Link to='/home' className='nav-link'>🏠</Link>
          <Link to='/explore' className='nav-link'>⌗</Link>
          <Link to='/notifications' className='nav-link'>🔔</Link>
          <Link to='/messages' className='nav-link'>✉️</Link>
          <Link to='/bookmarks' className='nav-link'>🔖</Link>
          <Link to='/lists' className='nav-link'>📃</Link>
          <Link to='/profile' className='nav-link'>👤</Link>
        </ul>
      </nav> 
    </div>
  )
}

export default Navbar