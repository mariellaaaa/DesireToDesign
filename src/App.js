import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import SignIn from './components/User/SignIn';
import React, { useState } from 'react';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Signup from './components/User/Signup';
import ProtectedRoute from './components/Page/ProtectedRoute';
import Home from './components/Page/Home';
import Navbar from './components/Page/NavBar';
import SignOut from './components/User/SignOut';
import UserData from './components/User/UserData';
import ForgotPassword from './components/User/ForgotPassword';

function App() {

  return (
    <UserAuthContextProvider>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route 
            path='/home' 
            element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            } 
          />
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signout' element={<SignOut />} />
          <Route path='/user/:data' element={<UserData />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </div>
    </UserAuthContextProvider>
  );
}

export default App;