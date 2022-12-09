import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='siteNav'>
        <ul>
          <Link to='/home' className='nav-link' title='Home'>🏠</Link>
          <Link to='/explore' className='nav-link' title='Explore'>⌗</Link>
          <Link to='/notifications' className='nav-link' title='Notifications'>🔔</Link>
          <Link to='/messages' className='nav-link' title='Messages'>✉️</Link>
          <Link to='/bookmarks' className='nav-link' title='Bookmarks'>🔖</Link>
          <Link to='/lists' className='nav-link' title='Lists'>📃</Link>
          <Link to='/profile' className='nav-link' title='Profile'>👤</Link>
        </ul>
      </nav> 
    </div>
  )
}

export default Navbar