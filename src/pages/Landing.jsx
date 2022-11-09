import React from 'react';
import { Link } from 'react-router-dom';

import "../App.css";

const Landing = () => {
  return (
    <>
      <div>
        <h1>Endless possibilities</h1>
      </div>
      <div>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Sign In</Link>
      </div>
    </>
  )
}

export default Landing