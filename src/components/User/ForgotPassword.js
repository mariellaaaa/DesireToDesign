import React, { useState } from 'react';
import { Alert, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const {forgotPassword} = useUserAuth();

    async function handleSubmit (e) {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            await forgotPassword(email)
            setMessage("The password reset message has been sent to your email")
        } catch {
            setError("Failed to reset the password");
        }
    }

  return (
    <>
    <Card className='container' style={{width: '25rem'}}>
        <Card.Body>
            <h2 className='text-center mb-4'>Password Reset</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            {message && <Alert variant='success'>{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Control
                        className='mb-3' 
                        type="email" 
                        placeholder='Email address'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <div className='d-grid gap-2'>
                    <Button className='button' type='Submit'>
                        Reset Password
                    </Button>
                </div>
            </Form>
            <div className='w-100 text-center mt-3'>
                <Link to="/">Sign In</Link>
            </div>
        </Card.Body>
    </Card>
    </>
  )
}
