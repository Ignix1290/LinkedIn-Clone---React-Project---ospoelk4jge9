import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import { Navigate, redirect } from "react-router";
import Signin from "./Signin";


const Home = (props)=>{
    function checkLogin(){
        console.log(props.isLoggedIn);
        return props.isLoggedIn;
    }
    return (
        (checkLogin()==false)?<Navigate to='/'></Navigate>: 
        <>
            <Header></Header>
            <div className='app_body'>
                <Sidebar></Sidebar>  
                <Feed></Feed>
                <Widget></Widget>
            </div>
        </>
    );
}

export default Home;