import React, {useEffect, useState} from "react";
import Header from "./Header";
import '../styles/Notification.css';
import '../styles/Header.css';
import { AiFillHome } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { IoBriefcase } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { AiFillBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import JobsSidebar from "./JobsSidebar";
import JobsWidget from "./JobsWidget";
import JobsFeed from "./JobsFeed";
import FadeLoader from "react-spinners/FadeLoader";


export default function Jobs(){

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
       <div className="jobs_body">
          <JobsSidebar></JobsSidebar>
          <JobsFeed></JobsFeed>
          <JobsWidget></JobsWidget>
       </div>
       }
    </div>
    )
}