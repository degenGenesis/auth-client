/*{ ---> Axios.js <--- }*/
import React, {useState} from 'react'
import axios from "axios";
import { Formik } from "formik";

const AxiosAPI = (email, password) => {

  const [register, setRegister] = useState(false);

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
      setRegister(true) 
      console.log(response);      
    })
    .catch((error) => {
      error = new Error('Registration failed');
      console.log(error);
    })
  };

export default AxiosAPI;