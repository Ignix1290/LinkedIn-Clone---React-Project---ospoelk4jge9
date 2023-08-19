import React, {useEffect, useState} from "react";
import '../styles/Notification.css';
import '../styles/Header.css';
import { AiFillHome } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { IoBriefcase } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { AiFillBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import About from "./About";
import "../styles/About.css";
import Header from "./Header";
import FadeLoader from "react-spinners/FadeLoader";
import Footer from "./Footer";


export default function Notification(){

    const [menu, setMenu] = useState(false);
    function handleClick(){
        setMenu(!menu);
    }

    const [loader, setLoader] = useState(false);

    useEffect(()=>{
      setLoader(true);
      setTimeout(()=>{
        setLoader(false);
      },1000)
    },[])

    return(
    <div>
      <Header></Header>
      {loader ? <FadeLoader className="loader" color={"#ccc"} loading={loader} size={50}/>
      :
       <div className="notification_body">
          <div className="notification_sidebar">
                Manage your Notifications
                <div className="coloured">View Settings</div>
          </div>
          <div className="notification_feed">
            <img src="https://img.freepik.com/free-vector/cute-man-working-computer-cartoon-vector-icon-illustration-people-technology-icon-isolated_138676-5717.jpg?w=740&t=st=1690983281~exp=1690983881~hmac=e6007d27f97af4479ed480f7f44ca22c19bd620ebb8ec66a69172199e90fa911"></img>
            <h2>No new notifications</h2>
            <p>View other updates at your Home</p>
            <Link to="/home"><button className="home_button">Go to Home</button></Link>
          </div>
          <div className="notification_about">
            <About></About>
          </div> 
                
       </div>
       }
       <Footer></Footer> 
    </div>
    )
}