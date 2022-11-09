/*{ ---> Axios.js <--- }*/
import React, { useState } from 'react';
import axios from "axios";
import { Formik } from "formik";

const AxiosAPI = (email, password) => {

  const [register, setRegister] = useState(false);

  const config = {
    method: 'post',
    url: 'https://user-auth-v1.herokuapp.com/register',
    // body: JSON.stringify({id: '200'}),
    data: {
      email,
      password,
    },
  };

  axios(config)
    .then((response) => {
      /* if (response.ok) {
        return response.json();
      } */ 
      console.log(response);
      setRegister(true);
      console.log("Registration successful!");
      // throw new Error('Registration failed!');
    })
    .catch((error) => {
      console.log(error);
      error = new Error('Registration failed!');
    });
    /* .then((jsonResponse) => {
      return jsonResponse; */
  };

  export default AxiosAPI;