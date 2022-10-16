/*{ ---> Axios.js <--- }*/
import React, {useState} from 'react'
import axios from "axios";
import { Formik } from "formik";

const AxiosAPI = (email, password) => {

  const [register, setRegister] = useState(false);

  const config = {
    method: 'post',
    url: 'https://user-auth-v1.herokuapp.com/register',
    body: JSON.stringify({id: '200'}),
    data: {
      email,
      password,
    },
  };

  axios(config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } 
      throw new Error('Registration failed!');
    }, networkError => console.log(networkError.message)
    )
    .then(jsonResponse => {
      return jsonResponse;
    });

  };

export default AxiosAPI;