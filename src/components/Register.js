import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Nav } from 'react-bootstrap';

import '../App.css';

const Register = () => {
  return (
    <>
      <div>
        <h2 className='name'>Sign Up!</h2>
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
      </div> 
      <div class="text-center fs-6">
            <Nav.Link variant='link'>Forgot password?</Nav.Link> or <Nav.Link variant='link'>Sign In</Nav.Link>
        </div>
    </>
  )
};

export default Register;