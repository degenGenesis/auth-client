import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Formik, useField, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Nav, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import '../App.css';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  )
};

export default Login;