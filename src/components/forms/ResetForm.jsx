import React from 'react'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";
import "../../App.css";

const ResetForm = () => {
    
   return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email required"),
      })}
      onSubmit={async (values) => {
        try {
          const response = await axios({
            method: "post",
            url: 'https://user-auth-v1.herokuapp.com/reset',
            data: {
              email: values.email,
            }
          });
          console.log(response);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <div className="form-container">
        <div className="wrapper">
          <Form className='p-3 mt-4'>
            <h2>We'll email you a link to reset your password.</h2>

            {/* Email */}
            <div className="form-field d-flex align-items-center">
              <label htmlFor="email">👤</label>
              <Field name="email" type="email" placeholder="Enter email" />
            </div>
            <div className='errors'>
              <ErrorMessage className='errors' name='email' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <div className="links">
              <div className='text-center fs-6'>
                <Link className='nav-links' to="/login">Sign In</Link>
              </div>
                 or
              <div className='text-center fs-6'>
                <Link className='nav-links' to="/signup">Sign Up</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
   )
};  

export default ResetForm