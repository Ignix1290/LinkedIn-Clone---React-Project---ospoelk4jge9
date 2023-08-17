import React, { useRef, useState } from "react";
import '../styles/JobsSidebar.css';
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { BiFileBlank } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router";
import { AiOutlineClose } from "react-icons/ai";

export default function JobsSidebar(){
    const navigate = useNavigate();
    const [jobAlertModal, setJobAlertModal] = useState("job_alert_modal_deactivated")

    function myjobsFunction(){
        navigate('/myjobs');
    }

    // function jobAlertsFunction(){
    //     navigate('/jobalerts');
    // }

    function skillsFunction(){
        navigate('/skillassessment');
    }

    function jobalertmodalFunction(){
        if(jobAlertModal === "job_alert_modal_deactivated"){
            setJobAlertModal("job_alert_modal_activated");
        }
        else{
            setJobAlertModal("job_alert_modal_deactivated");
        } 
    }

    return(
        <>
        <div className="jobs_sidebar">
            <div className="jobs_sidebar_top">
                <p onClick={myjobsFunction}><BsFillBookmarkFill></BsFillBookmarkFill>My jobs</p>
                <p onClick={jobalertmodalFunction}><BsBellFill></BsBellFill>Job alerts</p>
                <p onClick={skillsFunction}><BsClipboard2Check></BsClipboard2Check>Skill Assessment</p>
                <p><SiGooglesheets></SiGooglesheets>Interview prep</p>
                <p><BiFileBlank></BiFileBlank>Resume Builder</p>
                <p><BsYoutube></BsYoutube>Job seeker guidance</p>
                <p><IoSettingsSharp></IoSettingsSharp>Application settings</p>
            </div>
            <div className="jobs_sidebar_bottom">
                <h4><BiEdit></BiEdit>Post a free job</h4>
            </div>
        </div>
        <div className={jobAlertModal}>
            <div className="job_alert_body">
                <div className="job_alert_header">
                    <h2>Job alerts</h2>
                    <AiOutlineClose onClick={jobalertmodalFunction}></AiOutlineClose>
                </div>
                <div className="job_alert_content">
                    <img src="data:image/jpeg;base64,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"></img>
                    <h2>You have no job alerts yet</h2>
                    <p>Flip the switch on a job search page to create a new alert.</p>
                    <button className="search_for_jobs">Search for jobs</button>
                </div>
                <div className="job_alert_footer">
                    <p>Job recommendation</p>
                </div>
                <button type="button"className="done_button" onClick={jobalertmodalFunction}>Done</button>
            </div>
        </div>
        </>
    )
}