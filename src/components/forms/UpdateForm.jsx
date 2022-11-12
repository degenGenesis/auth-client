import React from 'react';
import { Formik, Form, useField, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import './App.css';

const UpdateForm = () => {
  return (
    <Formik
      initialValues={{
        password: '',
        newPassword: '',
        confirmNewPassword: '',
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password required'),
        
        newPassword: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password required'),
        
        confirmNewPassword: Yup.string()
          .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
          .required('Confirm password'),
      })}
      onSubmit={async (values) => {
        try {
          const response = await axios({
            method: 'post',
            url: 'https://user-auth-v1.herokuapp.com/update',
            data: {
              password: values.password,
              newPassword: values.newPassword,
              confirmNewPassword: values.confirmNewPassword
            }
          })
          console.log(response);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <div className="form-container">
        <div className="wrapper">
          <Form className='p-3 mt-4 pt-5'>
            <h1 className='name'>Update your password!</h1>
          </Form>
        </div>
      </div>
    </Formik>
  )
}

export default UpdateForm