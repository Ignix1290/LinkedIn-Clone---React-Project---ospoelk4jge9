import React, { useState } from "react";
import "../styles/Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";

function Sidebar(){
    const [commentsCount, setCommentsCount] = useState(0);
    // function commentFunction(){
    //     setCommentsCount(commentsCount+1);
    // }
    return(
        <div className="sidebar">
            <div className="sidebar__profile">
                <div className="profile__details">
                <img className="profile_bg_img" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img> */}
                    <FaUserCircle></FaUserCircle>
                    <h3>{localStorage.getItem("emailData")}</h3>
                    <p>Student</p>
                </div>

                <div className="stat__number">
                    <div className="profile__stats">
                       <span>Connections</span>
                       <span>10</span>
                    </div>
                    <span className="alumni"><b>Connect with alumni</b></span>
                </div>

                <div className="premium">
                    <span>Access exclusive tools & insights</span>
                    <p className="try_premium">Try Premium for free</p>
                </div>

                <div className="below_premium">
                <BsFillBookmarkFill></BsFillBookmarkFill><p>My items</p>
                </div>
            </div>

            <div className="sidebar__recent">
                <p className="hash">Groups</p>
                <p className="hash">Events</p>
                <p className="hash">Followed Hashtags</p>
            </div>

        </div>
    )
}

export default Sidebar;