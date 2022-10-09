import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button } from 'react-bootstrap';

import '../App.css';

const Login = () => {
  return (
    <>
      <h2 className='name'>Sign In!</h2>
      {/* Email */}
      <Form className='p-3 mt-3'>
        <div className='form-field d-flex align-items-center'>
          <span className='far fa-user'></span>
          <input type='text' name='Email' placeholder='Enter email' id='email' />
        </div>
        
        {/* Password */}
        <div className='form-field d-flex align-items-center'>
          <span className='far fa-user'></span>
          <input type='text' name='Email' placeholder='Enter password' id='email' />
        </div>

        {/* Submit button */}
        <Button className='btn mt-3' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;