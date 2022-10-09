import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Nav } from 'react-bootstrap';

import '../App.css';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  alert('Submitted');
};

  return (
    <>
      <div>
        <h2 className='name'>Sign Up!</h2>
        {/* Email */}
        <Form 
          className='p-3 mt-3'
          onSubmit={handleSubmit}
        >
          <div className='form-field d-flex align-items-center'>
            <input 
              className='far fa-user' 
              type='email'  
              name='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email' 
            />
          </div>
          
          {/* Password */}
          <div className='form-field d-flex align-items-center'>          
            <input 
              className='far fa-user'              
              type='password' 
              name='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Enter password' 
            />
          </div>

          {/* Submit button */}
          <Button 
            className='btn mt-3' 
            variant='primary'
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </div> 
      <div class="text-center fs-6">
            <Nav.Link variant='link'>Forgot password?</Nav.Link> or 
            <Nav.Link variant='link'>Sign In</Nav.Link>
        </div>
    </>
  )
};

export default Register;