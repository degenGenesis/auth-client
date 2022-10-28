import React from "react";
import { Routes, Route, } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import Register from "././components/Register";
import Register1 from "././components/Register1";
import Login from "./components/Login";

import "./App.css";

const App = () =>{
  return (

    <div className="form-container">
      <div>
        <Container fluid='true' className="wrapper">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Register1 />
            </Col>
            {/* <Col xs={12} sm={12} md={12} lg={6}>
              <Login />
            </Col> */}
          </Row>
          
          
          
        </Container>
        {/* Routes */}
        <Routes>
          {/* Forms */}
          {/* <Route path='/' element={(<Register />)} /> */}
          {/* <Route path='/login' element={(<Login />)} /> */}
          {/* <Route path='/resetPassword' element={ResetPassword} /> */}
        </Routes>
      </div>  
    </div>   
  );
}

export default App;