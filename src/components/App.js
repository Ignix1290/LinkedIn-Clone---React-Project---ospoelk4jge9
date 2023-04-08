import React, { useState } from 'react'
import '../styles/App.css';
import Signup from './Signup';
import { Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Home from './Home';

/**
 * Login means new user registration
 * 
 * AND
 * 
 * Signin mean exsisting user
 * 
 */

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className='body'>
      <Routes>
        <Route path="/" element={<Signin setLoggedIn = {setLoggedIn} />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home isLoggedIn={isLoggedIn}/>} />
      </Routes>
    </div>
  )
}


export default App;
