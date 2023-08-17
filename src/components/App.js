import React, { useState } from 'react';
import '../styles/App.css';
import Signup from './Signup';
import { Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Home from './Home';
import Network from './Network';
import Jobs from './Jobs';
import Notification from './Notification';
import Error from './Error';
import Connections from './Connections';
import Contacts from './Contacts';
import Followers from './Followers';
import Groups from './Groups';
import MyJobs from './MyJobs';
import SkillAssessment from './SkillAssessment';

/**
 * Signup means new user registration
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
        <Route path="/network" element={<Network/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/connections" element={<Connections/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/followers" element={<Followers/>} />
        <Route path="/groups" element={<Groups/>} />
        <Route path="/myjobs" element={<MyJobs/>} />
        {/* <Route path="/jobalerts" element={<JobAlerts/>} /> */}
        <Route path="/skillassessment" element={<SkillAssessment/>} />
        {/* <Route path="/interviewprep" element={<InterviewPrep/>} /> */}
        <Route path="/*" element={<Error/>} />
      </Routes>
    </div>
  )
}


export default App;
