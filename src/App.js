import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Container, Col, Row } from "react-bootstrap";

import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Reset from "./pages/Reset.jsx";

import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  // return (

  //   <div className="form-container">      
  //       <div>
  //         <Container fluid='true' className="wrapper">
  //           <Row>
  //             <Col xs={12} sm={12} md={12} lg={12}>
  //               <Register />
  //             </Col>
  //             {/* <Col xs={12} sm={12} md={12} lg={6}>
  //               <Login />
  //             </Col> */}
  //           </Row>
            
            
            
  //         </Container>
  //         {/* Routes */}
  //       <Routes>
  //         <Route>
  //           {/* Forms */}
  //           {/* <Route exact path='/register' element={(<Register />)} /> */}
  //           {/* <Route path='/login' element={(<Login />)} /> */}
  //           {/* <Route path='/resetPassword' element={ResetPassword} /> */}
  //         </Route>
  //       </Routes>
  //       </div>  
      
  //   </div>   
  // );

  return (
    <div>
      <div className="landing">
        <Header />
        <Navbar />
      </div>  
      
      <div className='body'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset' element={<Reset />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;