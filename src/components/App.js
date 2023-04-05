import React, { useState } from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import Login from './Login';
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
        <Route path="/signup" element={<Login  />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Login></Login> */}
      {/* <Header></Header>
      <div className='app_body'>
        <Sidebar></Sidebar>  
        <Feed></Feed>
        <Widget></Widget>
      </div> */}
    </div>
  )
}


export default App;
