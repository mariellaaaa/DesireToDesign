import './App.css';
import { Routes, Route } from "react-router-dom";
import SignIn from './components/User/SignIn';
import Reac, { useState } from 'react';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Signup from './components/User/Signup';
import ProtectedRoute from './components/Page/ProtectedRoute';
import Navbar from './components/Page/NavBar';
import SignOut from './components/User/SignOut';
import UserData from './components/User/UserData';
import ForgotPassword from './components/User/ForgotPassword';
import Home from './components/Page/Home/Home';
import Communication from './components/Page/FreeLearning/Communication';
import Furniture from './components/Page/FreeLearning/Furniture';
import StylesColors from './components/Page/FreeLearning/StylesColors';
import LearningOptions from './components/Page/LearningOptions';

function App() {
  const [id, setId] = useState(null);

  return (
    <UserAuthContextProvider>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route 
            path='/home' 
            element={
            <ProtectedRoute>
              <Home
                setId={setId}
                id={id}
              />
            </ProtectedRoute>
            } 
          />
          <Route exact path='/' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signout' element={<SignOut />} />
          <Route path='/user/:data' element={<UserData />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/communication' element={<Communication />} />
          <Route path='/furniture' element={<Furniture />} /> 
          <Route path='/styles-colors' element={<StylesColors />} />
          <Route path='/learning-options/:data' element={<LearningOptions id={id} />} />
        </Routes> 
      </div>
    </UserAuthContextProvider>
  );
}

export default App;