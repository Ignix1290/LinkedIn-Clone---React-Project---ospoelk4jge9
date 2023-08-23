import React, { useState } from "react";
import '../styles/Header.css';
import { AiFillHome } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { IoBriefcase } from "react-icons/io5";
import { AiFillBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";


function Header(){
    const [menu, setMenu] = useState(false);
    function handleClick(){
        setMenu(!menu);
    }

    const navigate = useNavigate();

    function homeTabFunction(){
        navigate("/home");
        document.getElementById("home_page").style.color = "black";
    }

    function networkTabFunction(){
        navigate("/network");
        document.getElementById("network_page").style.color = "black";
    }

    function jobsTabFunction(){
        navigate("/jobs");
        document.getElementById("jobs_page").style.color = "black";
    }

    function notificationTabFunction(){
        navigate("/notification");
        document.getElementById("notification_page").style.color = "black";
    }
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"></img>
                </div>
                <div className="header__search">
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png"></img> */}
                    <AiOutlineSearch></AiOutlineSearch>
                    <input type="text" placeholder="Search"></input>
                </div>

            </div>
            <div className="header__right">
                <div className="header__icons" onClick={homeTabFunction} id="home_page">
                    <AiFillHome></AiFillHome>
                    <p>Home</p>
                </div>
                <div className="header__icons" onClick={networkTabFunction} id="network_page">
                    <ImUsers></ImUsers>
                    <p>My Network</p>
                </div>
                <div className="header__icons" onClick={jobsTabFunction} id="jobs_page">
                    <IoBriefcase></IoBriefcase>
                    <p>Jobs</p>
                </div>
                {/* <div className="header__icons">
                    <IoChatboxEllipses></IoChatboxEllipses>
                    <p>Messaging</p>
                </div> */}
                <div className="header__icons" onClick={notificationTabFunction} id="notification_page">
                    <AiFillBell></AiFillBell>
                    <p>Notifications</p>
                </div>
                <div className="header__icons" onClick={handleClick}>
                    <FaUserCircle></FaUserCircle>
                    <p>Me</p><IoMdArrowDropdown></IoMdArrowDropdown>
                    
                </div>
                <div className={menu===true?'activate':'deactivate'} id="dropDownMenu">
                    <div className='head'>
                       <FaUserCircle></FaUserCircle>
                       <h2 id="name">{localStorage.getItem("emailData")}</h2>
                       <h4 className="profile">View Profile</h4>
                    </div>
                    <div className="settings">
                        <p>Settings & Privacy</p>
                        <p>Help</p>
                        <p>Language</p>
                        <p>Post & Activity</p>
                        <p>Job Posting Account</p>
                        <NavLink to="/"><p className="signout">Sign Out</p></NavLink>
                    </div>
                    
                </div>
                
                
                {/* <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img>} title="Home"/> */}
                {/* <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/681/681494.png"></img>} title="Network"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/522/522510.png"></img>} title="Jobs"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/3193/3193061.png"></img>} title="Message"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/3602/3602123.png"></img>} title="Notification"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img>} title="Samuel Lakra"/> */}
            </div>
        </div>
    )
}

export default Header;