import React from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    const signUserOut = async() => {
        try {
            await logOut();
            navigate("/");
            window.location.reload(true);
        } catch (err) {
            console.log(err.message)
        }
    };
  return (
    <>
        <div className='sign-out'>
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
