import axios from "axios";
import { Formik } from "formik";

const AxiosAPI = (email, password) => {
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
      Formik.setSubmitting(false);
    })
    .catch((error) => {
      error = new Error('Registration failed');
    })
  };

export default AxiosAPI;