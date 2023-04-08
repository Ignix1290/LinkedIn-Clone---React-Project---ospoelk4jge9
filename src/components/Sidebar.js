import React from "react";
import "../styles/Sidebar.css";
import { FaUserCircle } from "react-icons/fa";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar__profile">
            

                <div className="profile__details">
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img> */}
                    <FaUserCircle></FaUserCircle>
                    <h4>{localStorage.getItem("emailData")}</h4>
                    <p>Student</p>
                </div>

                <div className="profile__stats">
                    <span>Who viewed your profile</span>
                    <span className="stat__number">20</span>
                </div>

                <div className="profile__stats">
                    <span>Connection<br/><b>Grow Your Network</b></span>
                    <span className="stat__number">20</span>
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