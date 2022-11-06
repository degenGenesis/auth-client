import React from 'react';
import { Formik, Form, useField, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Nav } from 'react-bootstrap';

import axios from 'axios';
import '../App.css';
import Login from './Login';

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

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
}

const Register = () => {

  /* ---> for use w/o Yup library & w/o <Formik /> component <--- */
   /* const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }, */
     
    /* ---> for use w/o Yup library <--- */
    // validate,

    /* ---> for use w/ Yup library & w/o <Formik /> component <--- */
    /* validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
/* ---> standard React useState state management <--- */
/*  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register, setRegister] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  alert('Submitted'); 
}; */

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email required'),
        
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password required'),
        
        // confirmPassword: Yup.string()
        //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
        //   .required('Confirm password'),
      })}
      onSubmit={async (values, actions) => {
        try {
          const response = await axios({
            method: 'post',
            url: 'https://user-auth-v1.herokuapp.com/register',
            data: {
              email: values.email,
              password: values.password,
            }
          })
        } catch (error) {
          console.log(error);
          actions.setSubmitting(false);
        }
      }
    }
    > 
      
        <Form 
          className='p-3 mt-4'
        >
          <h2 className='name'>Sign Up!</h2>        
          {/* Email */}
          <div className='form-field d-flex align-items-center'>
            <label htmlFor='email'>👤</label>
            <Field             
              name='email'
              type='email'
              placeholder='Enter email' 
            />
          </div>
          <div className='errors'>
            <ErrorMessage className='errors' name='email' />
          </div>

          {/* Password */}
          <div className='form-field d-flex align-items-center'>          
            <label htmlFor='password'>🔑</label>
            <Field 
              name='password'              
              type='password'
              placeholder='Enter password' 
            />
          </div>
          <div className='errors'>
            <ErrorMessage className='errors' name='password' />
          </div>

          {/* Confirm Password */}
          {/* <div className='form-field d-flex align-items-center'>          
            <label htmlFor='confirmPassword'>🔑</label> */}
            {/* ---> for use w/ <Formik /> component <--- */}
            {/* <Field
              name='confirmPassword'
              type='password'
              placeholder='Confirm password' 
            />
          </div>
          <div className='errors'>  
            <ErrorMessage name='confirmPassword' />
          </div> */}

          {/* Submit button */}
          <button 
            className='btn mt-3' 
            type='submit'
          >
            Submit
          </button>
          <div className="text-center fs-6">
                <Nav.Link variant='link'>Forgot password?</Nav.Link> or 
                <Nav.Link href='/login' variant='link'>Sign In</Nav.Link>
          </div>
        </Form>
       
    </Formik>
  )
};

export default Register;