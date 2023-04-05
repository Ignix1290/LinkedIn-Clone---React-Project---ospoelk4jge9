import React from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import Login from './Login';


const App = () => {


  return (
    <div className='body'>
      <Login></Login>
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
