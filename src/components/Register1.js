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
    <h2 className="name">Register</h2>
    
  )

};