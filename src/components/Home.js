import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";


const Home = ()=>{
    return (
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