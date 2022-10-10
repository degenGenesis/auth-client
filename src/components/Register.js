import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Nav } from 'react-bootstrap';

import '../App.css';

/* ---> validation for use w/o Yup library <--- */
/* const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
}; */

const Register = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
     
    /* ---> for use w/o Yup library <--- */
    // validate,

    /* ---> for use w/ Yup library <--- */
    validationSchema
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
/*  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register, setRegister] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  alert('Submitted'); 
}; */

  return (
    <>
      <div>
        <h2 className='name'>Sign Up!</h2>
        {/* Email */}
        <form 
          className='p-3 mt-3'
          onSubmit={formik.handleSubmit}
        >
          {formik.touched.email && formik.errors.email ? <div className='errors'>{formik.errors.email}</div> : null}
          <div className='form-field d-flex align-items-center'>
            <label className='far fa-user'>👤</label>
            <input
              id='email'             
              type='email'  
              name='email' 
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Enter email' 
            />
          </div>
          
          {/* Password */}
          {formik.touched.password && formik.errors.password ? <div className='errors'>{formik.errors.password}</div> : null}
          <div className='form-field d-flex align-items-center'>          
            <label className='far fa-key'>🔑</label>
            <input
              id='password' 
              className='far fa-user'              
              type='password' 
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              placeholder='Enter password' 
            />
          </div>
          
          {/* Confirm Password */}
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='errors'>{formik.errors.confirmPassword}</div> : null}
          <div className='form-field d-flex align-items-center'>          
          <label className='far fa-key'>🔑</label>
            <input
              id='confirmPassword'
              type='password' 
              name='confirmPassword'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              placeholder='Confirm password' 
            />
          </div>

          {/* Submit button */}
          <Button 
            className='btn mt-3' 
            variant='primary'
            type='submit'
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div> 
      <div class="text-center fs-6">
            <Nav.Link variant='link'>Forgot password?</Nav.Link> or 
            <Nav.Link variant='link'>Sign In</Nav.Link>
        </div>
    </>
  )
};

export default Register;