import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";
import "../../App.css";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password required"),
      })}
      onSubmit={async (values) => {
        try {
          const response = await axios({
            method: "post",
            url: 'https://user-auth-v1.herokuapp.com/login',
            data: {
              email: values.email,
              password: values.password,
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
            <h2 className="name">Sign In!</h2>
            {/* Email */}
            <div className="form-field d-flex align-items-center">
              <label htmlFor="email">👤</label>
              <Field name="email" type="email" placeholder="Enter email" />
            </div>
            <div className='errors'>
              <ErrorMessage className='errors' name='email' />
            </div>
            {/* Password */}
            <div className="form-field d-flex align-items-center">
              <label htmlFor="password">🔑</label>
              <Field name="password" type="password" placeholder="Enter password" />
            </div>
            <div className='errors'>
              <ErrorMessage className='errors' name='email' />
            </div>
            <button className="btn mt-3" type="submit">
              Submit
            </button>
            <div className="links">
              <div className="text-center fs-6">
                <Link className='nav-links' to="/reset">Forgot Password?</Link>
              </div>
                  or
              <div className="text-center fs-6">
                <Link className='nav-links' to="/register">Sign Up!</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
    )
};

export default LoginForm;