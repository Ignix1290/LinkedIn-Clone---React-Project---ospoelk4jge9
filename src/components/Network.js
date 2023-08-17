import React, {useEffect, useState} from "react";
import Header from "./Header";
import '../styles/Network.css';
import '../styles/Header.css';
import { AiFillHome } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { IoBriefcase } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { AiFillBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import NetworkSidebar from "./NetworkSidebar";
import NetworkFeed from "./NetworkFeed";
import FadeLoader from "react-spinners/FadeLoader";


export default function Network(){

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
       <div className="network_body">
           <NetworkSidebar></NetworkSidebar>
           <NetworkFeed></NetworkFeed>
       </div>
       }
    </div>
    )
}