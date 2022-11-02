import React, { useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import axios from 'axios';

import '../App.css';

const Register = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [register, setRegister] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: 'post',
      url: 'https://user-auth-v1.herokuapp.com/register',
      data: {
        email,
        password,
      },
    };
  
    axios(config)
      .then((response) => {
        console.log(response);
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
        error = new Error('Registration failed!');
      });
  };

  return (
    <div>
      <Form 
        className="p-3 mt-3"
        onSubmit={(e) => handleSubmit(e)}
      >
          <div className="form-field d-flex align-items-center">
            <input 
              type='text'
              name='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email'
            />
          </div>

          {/* Password */}
          <div className="form-field d-flex align-items-center">
            <input 
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password'
            />
          </div>

          {/* Confirm Password */}
        {/* <div className="form-field d-flex align-items-center">
          <input 
            type='password'
            name='Confirm Password'
            value={confirmPassword}
            placeholder='Confirm password'
            onChange={ () => {
                if (password === confirmPassword) {
                  setConfirmPassword(confirmPassword);
                } else {
                  // ("Passwords do not match");
                }
              }
            }
          />
        </div> */}

        <Button 
          className="btn mt-3"
          type="submit"
          variant="primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        <div className="links">
          <div className="text-center fs-6">
            <Nav.Link variant='link'>
              Forgot password?
            </Nav.Link>
          </div>
          <div className="text-center fs-6">
                or
          </div> 
          <div className="text-center fs-6">
            <Nav.Link href='/login' variant='link'>
              Sign In
            </Nav.Link>
          </div>
        </div>
            {/* display success message */}
            {/* {register ? (
              <p className='text-success'>Registration successful!</p>
            ) : (
              <p className='text-danger'>Registration failed!</p>
            )} */}
      </Form>
    </div>
  )
}

export default Register