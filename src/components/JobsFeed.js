import React, { useState } from "react";
import '../styles/JobsFeed.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";


export default function JobsFeed(){
    const [ suggestions, setSuggestions] = useState("jobs_feed_suggestions_activated");

    function closeSuggestions(e){
         setSuggestions("jobs_feed_suggestions_deactivated");
         document.getElementById("jobs_feed_bottom").style.marginTop = "-83px";
    }
    return(
        <div className="jobs_feed">

            <div className={suggestions}>
                <div className="suggestions_heading">
                    <h3>Suggested job searches</h3><AiOutlineClose onClick={closeSuggestions}></AiOutlineClose>
                </div>
                <div className="suggestions_body">
                    <button className="suggestions_button"><BiSearchAlt2></BiSearchAlt2>Manager</button>
                    <button className="suggestions_button"><BiSearchAlt2></BiSearchAlt2>Hr</button>
                    <button className="suggestions_button"><BiSearchAlt2></BiSearchAlt2>Amazon</button>
                    <button className="suggestions_button"><BiSearchAlt2></BiSearchAlt2>Google</button>
                    <button className="suggestions_button"><BiSearchAlt2></BiSearchAlt2>Analyst</button>
                </div>
            </div>

            <div id="jobs_feed_bottom">
                <div className="jobs_feed_header">
                    <h3>Recommended for you</h3>
                    <p>Based on your profile and search history</p>
                </div>

                <div className="Jobs_feed_recommendation">
                    <div className="company_logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-RodbKybh5ofnV3HVuMogMeeMRElzTYy1YDrr1eh4-UH9Au3aiu6bUMAFTIEgvHiLkY&usqp=CAU"></img>
                    </div>
                    <div className="company_details">
                        <p className="designation">Remote technical support</p>
                        <p className="company_name">IBM</p>
                        <p className="location">Gurgaon, Haryana, India (Remote)</p>
                        <p className="days">5 days ago</p>
                    </div>
                    <BsBookmark></BsBookmark>
                </div>
                <div className="Jobs_feed_recommendation">
                    <div className="company_logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmiFu_6G7yKqK4CCLv-7IsmA_SiyFmZJZTA&usqp=CAU"></img>
                    </div>
                    <div className="company_details">
                        <p className="designation">Cloud Development Application Developer</p>
                        <p className="company_name">Accenture in India</p>
                        <p className="location">Gurugram, Haryana, India (Remote)</p>
                        <p className="days">promoted</p>
                    </div>
                    <BsBookmark></BsBookmark>
                </div>
                <div className="Jobs_feed_recommendation">
                    <div className="company_logo">
                        <img src="data:image/png;base64,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"></img>
                    </div>
                    <div className="company_details">
                        <p className="designation">Process Developer</p>
                        <p className="company_name">Genpact</p>
                        <p className="location">Gurugram, Haryana, India (On-site)</p>
                        <p className="days">6 days ago</p>
                    </div>
                    <BsBookmark></BsBookmark>
                </div>
                {/* <div className="Jobs_feed_recommendation">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-RodbKybh5ofnV3HVuMogMeeMRElzTYy1YDrr1eh4-UH9Au3aiu6bUMAFTIEgvHiLkY&usqp=CAU"></img>
                    <p className="designation">Cloud Development Application Developer</p>
                    <p>Accenture in India</p>
                    <p className="location">Gurugram, Haryana, India (Remote)</p>
                    <p className="days">promoted</p>
                    <BsBookmark></BsBookmark>
                </div>
                <div className="Jobs_feed_recommendation">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-RodbKybh5ofnV3HVuMogMeeMRElzTYy1YDrr1eh4-UH9Au3aiu6bUMAFTIEgvHiLkY&usqp=CAU"></img>
                    <p className="designation">Process Developer</p>
                    <p>Genpact</p>
                    <p className="location">Gurugram, Haryana, India (On-site)</p>
                    <p className="days">6 days ago</p>
                    <BsBookmark></BsBookmark>
                </div> */}
            </div>
        </div>
    )
}