import React from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    const signUserOut = async() => {
        try {
            await logOut();
            navigate("/");
        } catch (err) {
            console.log(err.message)
        }
    };
  return (
    <>
        <div>
            <div class="card border-danger mb-3">
                <div class="card-header">Sign Out</div>
                <div class="card-body text-danger">
                    <h5 class="card-title">Are you sure you want to sign out?</h5>
                </div>
            </div>
            <button type="button" className="btn btn-danger" onClick={signUserOut}>Sign Out</button>
        </div>
    </>
  )
}
