import React, { useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase';


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const userList = collection(db, "Users");

  const handleSubmit = async (e) => {
    if (userType == "Admin" && secretKey != "34Ghs87") {
      e.preventDefault();
      setError("Invalid Admin")
    } else {
      e.preventDefault();
      if (password !== passwordConfirm) {
        return setError("Passwords do not match");
      }
      setError("");
      try {
        await signUp(email, password);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
      await addDoc(userList, {
        email: email, 
        password: password,
        createdAt: serverTimestamp(),
        userType: userType,
    });
    }
  };

  return (
    <div className='account'>
      <div className='card' style={{width: '25rem'}}>
        <div className='p-4 box'>
          <h2 className='mb-3'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <div>
              <input 
                type='radio'
                name='UserType'
                value='User'
                onChange={(e) => setUserType(e.target.value)}
              />
              User
              <input 
                type='radio'
                name='UserType'
                value='Admin'
                onChange={(e) => setUserType(e.target.value)}
              />
              Admin
            </div>

            {userType == "Admin" ? (
              <Form.Group className='mb-3' controlId='formBasicPasswordConfirmation'>
                <Form.Control type='password' placeholder='Secret key'
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </Form.Group>
            ) : null}

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
            <Form.Group className='mb-3' controlId='formBasicPasswordConfirmation'>
              <Form.Control type='password' placeholder='Password Confirmation'
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button className='button' type='Submit'>
                Sign Up
              </Button>
            </div>
          </Form>
          <hr />
        </div>
      </div>
      <div className='card' style={{width: '25rem'}}>
        <div className='p-4 box text-center'>
          Already have an account? <Link to='/'>Sign In</Link>
        </div>
      </div>
    </div>
  );
}
