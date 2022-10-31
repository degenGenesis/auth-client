import React, { useState } from 'react';
import { Formik, Form, useField, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Nav } from 'react-bootstrap';
import axios from 'axios';

import '../App.css';


const Login = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, setLogin] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Submitted");
    const config = {
      method: 'post',
      url: 'https://user-auth-v1.herokuapp.com/login',
      data: {
        email,
        password,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response);
        setLogin(true);
      })
      .catch((error) => {
        console.log(error);
        error = new Error('Login failed!');
      });
  };
  

  return (
    <>
      <h2 className='name'>Sign In!</h2>
      {/* Email */}
      <Form 
        className='p-3 mt-3'
        onSubmit={(e) => {handleSubmit(e)}}
      >
        <div className='form-field d-flex align-items-center'>
          <input 
            type='email' 
            name='email' 
            value={email}
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}          
          />
        </div>
        
        {/* Password */}
        <div className='form-field d-flex align-items-center'>
          <input 
            type='password' 
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        {/* Submit button */}
        <button 
          className='btn mt-3'
          variant='primary'
          type='submit'
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
        <div className="text-center fs-6">
          <Nav.Link variant='link'>
            Forgot password?
          </Nav.Link> 
              or 
          <Nav.Link href='/Login' variant='link'>
            Sign Up
          </Nav.Link>
        </div>
      </Form>
    </>
  );
};

export default Login;