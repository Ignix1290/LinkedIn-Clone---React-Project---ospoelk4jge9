import React, { useState } from "react";
import '../styles/NetworkSidebar.css';
import About from "./About";
import { BsPeopleFill } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { BsNewspaper } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import {useNavigate } from "react-router";

export default function NetworkSidebar(){
    const navigate = useNavigate();
    // const [popup, setpopup] = useState("off");

    function connectionFunction(){
        navigate("/connections");
    }

    function contactFuntions(){
        navigate("/contacts");
    }

    function followerFuntions(){
        navigate("/followers");
    }

    function groupFuntions(){
        navigate("/groups");
    }
    return(
        <div className="network_sidebar">
            <div className="sidebar_top">
                <h3>Manage your network</h3>
                <p onClick={connectionFunction}><BsPeopleFill></BsPeopleFill>Connections</p>
                <p onClick={contactFuntions}><MdPermContactCalendar></MdPermContactCalendar>Contacts</p>
                <p onClick={followerFuntions}><FaUserAlt></FaUserAlt>Following & followers</p>
                <p onClick={groupFuntions}><MdGroups></MdGroups>Groups</p>
                <p className="events"><BsCalendarCheck></BsCalendarCheck>Events</p>
                <p className="page"><RiPagesLine></RiPagesLine>Page</p>
                <p className="news"><BsNewspaper></BsNewspaper>Newsletter</p>
                <p className="hashtag"><FaHashtag></FaHashtag>Hashtags</p>
                <span>Grow your network</span>
            </div>
            <div className="sidebar_bottom">
                <About></About>
            </div>
            {/* <div className={popup}>
                <div className="coming_soon">
                    <p>Coming Soon...</p>
                </div>
            </div> */}
        </div>
    )
}