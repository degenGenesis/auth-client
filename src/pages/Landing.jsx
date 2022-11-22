import React from 'react';
import { Link } from 'react-router-dom';

import "../App.css";

const Landing = () => {
  return (
    <>
      <div className='landing-bg'>
        <h1 className='landing-title'>Endless possibilities</h1>
      </div>
      <div>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Sign In</Link>
      </div>
    </>
  )
}

export default Landing