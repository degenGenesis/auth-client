import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Form, Button } from 'react-bootstrap';

import '../App.css';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted');
  };

  return (
    <>
      <h2 className='name'>Sign In!</h2>
      {/* Email */}
      <Form 
        className='p-3 mt-3'
        onSubmit={handleSubmit}
      >
        <div className='form-field d-flex align-items-center'>
          <input 
            type='text' 
            name='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}          
            placeholder='Enter email'
          />
        </div>
        
        {/* Password */}
        <div className='form-field d-flex align-items-center'>
          <input 
            type='password' 
            name='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter password'
          />
        </div>

        {/* Submit button */}
        <Button className='btn mt-3' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;