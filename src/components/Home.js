import React, {useEffect, useState} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import About from "./About";
import { Navigate, redirect } from "react-router";
import Signin from "./Signin";
import '../styles/Home.css';
import FadeLoader from "react-spinners/FadeLoader";


const Home = (props)=>{
    function checkLogin(){
        console.log(props.isLoggedIn);
        return props.isLoggedIn;
    }

    const [loader, setLoader] = useState(false);

    useEffect(()=>{
      setLoader(true);
      setTimeout(()=>{
        setLoader(false);
      },1000)
    },[])

    return (
        (checkLogin()==false)?<Navigate to='/'></Navigate>: 
        <>
        <Header></Header>
        {loader ? <FadeLoader className="loader" color={"#ccc"} loading={loader} size={50}/>
        :
        <>
            <div className='app_body'>
                <Sidebar></Sidebar>  
                <Feed></Feed>
                <Widget></Widget>
            </div>
            </>
        }
        </>
    );
}

export default Home;