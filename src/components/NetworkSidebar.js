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
    const [eventPopup, setEventPopup] = useState("events_popup_deactivated")
    const [pagenewshashtag, setPageNewsHashtag] = useState("page_news_hashtag_deactivated");

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

    function eventpopupFunction(){
        if(eventPopup==='events_popup_deactivated'){
            setEventPopup("events_popup_activated");
        }
        else{
            setEventPopup("events_popup_deactivated");
        }
    }

    function pagenewshashtagFunction(){
        if(pagenewshashtag==="page_news_hashtag_deactivated"){
            setPageNewsHashtag("page_news_hashtag_activated")
        }
        else{
            setPageNewsHashtag("page_news_hashtag_deactivated")
        }
    }
    return(
        <div className="network_sidebar">
            <div className="sidebar_top">
                <h3>Manage your network</h3>
                <p onClick={connectionFunction}><BsPeopleFill></BsPeopleFill>Connections</p>
                <p onClick={contactFuntions}><MdPermContactCalendar></MdPermContactCalendar>Contacts</p>
                <p onClick={followerFuntions}><FaUserAlt></FaUserAlt>Following & followers</p>
                <p onClick={groupFuntions}><MdGroups></MdGroups>Groups</p>
                <p className="events" onClick={eventpopupFunction}><BsCalendarCheck></BsCalendarCheck>Events</p>
                <p className="page" onClick={pagenewshashtagFunction}><RiPagesLine></RiPagesLine>Page</p>
                <p className="news" onClick={pagenewshashtagFunction}><BsNewspaper></BsNewspaper>Newsletter</p>
                <p className="hashtag" onClick={pagenewshashtagFunction}><FaHashtag></FaHashtag>Hashtags</p>
                <span>Grow your network</span>
            </div>
            <div className="sidebar_bottom">
                <About></About>
            </div>
            <div className={eventPopup}>
                <div className="events_popup">
                    <h1>No events yet!!!</h1>
                    <button onClick={eventpopupFunction}>OKAY</button>
                </div>
                
            </div>
            <div className={pagenewshashtag}>
                <div className="page_news_hashtag">
                    <h1>This feature is coming soon!!!</h1>
                    <button onClick={pagenewshashtagFunction}>OKAY</button>
                </div>
            </div>
        </div>
    )
}