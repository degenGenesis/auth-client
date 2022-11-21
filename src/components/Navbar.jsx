import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='siteNav'>
        <ul>
          <Link>Home</Link>
          <Link>Explore</Link>
          <Link>Notifications</Link>
          <Link>Messages</Link>
          <Link>Bookmarks</Link>
          <Link>Lists</Link>
          <Link>Profile</Link>
        </ul>
      </nav> 
    </div>
  )
}

export default Navbar