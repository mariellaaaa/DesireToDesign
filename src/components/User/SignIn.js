import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async(e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='account'>
      <div className='card' style={{width: '25rem'}}>
        <div className='p-4 box'>
          <h2 className='mb-3'>Sign In</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Email address'
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control type='password' placeholder='Password'
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button className='button' type='Submit'>
                Sign In
              </Button>
            </div>
            <div className='w-100 text-center mt-3'>
              <Link to='/forgot-password'>Forgot Password?</Link>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton 
              className='g-btn'
              type='light'
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
      </div>
      <div className='card' style={{width: '25rem'}}>
        <div className='p-4 box mt-3 text-center'>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
