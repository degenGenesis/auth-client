import React from "react";
import { Nav, Form, Button } from "react-bootstrap";
import axios from "axios";

import "../App.css";

export default function Register () {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [register, setRegister] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
    const config = {
      method: "post",
      url: "https://user-auth-v1.herokuapp.com/register",
      data: {
        email,
        password,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response);
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
        error = new Error("Registration failed!");
      });
  };

  return (
    <>
      <h2 className="name">Register</h2>
      {/* Email */}
      <Form 
      className="p-3 mt-3"
      onSubmit={handleSubmit}
      >
        <div className="form-field d-flex align-items-center">
          <input 
            type='text'
            name='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
          />
        </div>

        {/* Password */}
        <div className="form-field d-flex align-items-center">
          <input 
            type='password'
            name='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
          />

          {/* Confirm Password */}
          <input 
            type='password'
            name='Confirm Password'
            value={confirmPassword}
            onChange={ () => {
                if (password === confirmPassword) {
                  setConfirmPassword(confirmPassword);
                } else {
                  alert("Passwords do not match");
                }
              }
            }
           />
        </div>
      </Form>
    </>
  )

};