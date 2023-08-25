import React, {useEffect, useState} from "react";
import Header from "./Header";
import "../styles/Myjobs.css";
import { BsBookmarkFill } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import FadeLoader from "react-spinners/FadeLoader";
import Footer from "./Footer";

export default function MyJobs(){

    const [loader, setLoader] = useState(false);
    const [alreadyApplied, setAlreadyApplied] = useState("already_applied_deactivated");
    const [questionsPopup, setQuestionsPopup] = useState("questions_popup_deactivated");

    useEffect(()=>{
      setLoader(true);
      setTimeout(()=>{
        setLoader(false);
      },1000)
    },[])

    function alreadyAppliedFunction(){
        if(alreadyApplied === "already_applied_deactivated"){
            setAlreadyApplied("already_applied_activated")
        }
        else{
            setAlreadyApplied("already_applied_deactivated");
        }
    }

    function questionsFunction(){
        if(questionsPopup === "questions_popup_deactivated"){
            setQuestionsPopup("questions_popup_activated")
        }
        else{
            setQuestionsPopup("questions_popup_deactivated");
        }
    }
    return(
        <>
        <Header></Header>
        {loader ? <FadeLoader className="loader" color={"#ccc"} loading={loader} size={50}/>:
        <div className="myjobs_body">
            <div className="myjobs_sidebar_body">
                <p><BsBookmarkFill></BsBookmarkFill>My items</p>
                <p>My jobs</p>
            </div>
            <div className="myjobs_feed_body">
                <div className="myjobs_feed_header">
                    <h2>My jobs</h2>
                    <button className="applied">Applied</button>
                </div>
                <div className="myjobs_feed_content">
                    <div className="Jobs_feed_recommendation">
                        <div className="company_logo">
                            <img src="https://media.licdn.com/dms/image/C560BAQFsvADfvcJi_A/company-logo_100_100/0/1676336400130?e=1700092800&v=beta&t=ibjz73XvE8719yClx6O_3ZY4e378n2bCQvSQvHGiKIA"></img>
                        </div>
                        <div className="company_details">
                            <p className="company_post" onClick={alreadyAppliedFunction}>Software Engineer (Fresher)</p>
                            <p className="company_name">Samsung Electronics</p>
                            <p className="location">Noida (On-site)</p>
                            <p className="days">Applied 11mo ago</p>
                        </div>
                    </div>
                    {/* <CiMenuKebab></CiMenuKebab> */}
                    <div className="Jobs_feed_recommendation">
                        <div className="company_logo">
                            <img src="https://media.licdn.com/dms/image/C4D0BAQFPP1NRP4F5dQ/company-logo_100_100/0/1656657976685?e=1700092800&v=beta&t=GuwWWNId3zCtP0iY-3LoR04QCE69F1LDhORSO3raFjI"></img>
                        </div>
                        <div className="company_details">
                            <p className="company_post" onClick={alreadyAppliedFunction}>Data Analyst</p>
                            <p className="company_name">Tata Consultancy Services</p>
                            <p className="location">Maharashtra, India (Hybrid)</p>
                            <p className="days">Applied 1yr ago</p>
                        </div>
                    </div>
                    {/* <CiMenuKebab></CiMenuKebab> */}
                    <div className="Jobs_feed_recommendation">
                        <div className="company_logo">
                            <img src="https://media.licdn.com/dms/image/C4E0BAQE0UPACNUrv3g/company-logo_100_100/0/1674757963152?e=1700092800&v=beta&t=rTkeGONKhfGpSd3QDbnIWk56ZW131jxwO0zAcy5rwJ8"></img>
                        </div>
                        <div className="company_details">
                            <p className="company_post" onClick={alreadyAppliedFunction}>Technical Support Engineer</p>
                            <p className="company_name">Wipro</p>
                            <p className="location">Bengaluru (On-site)</p>
                            <p className="days">Applied 1yr ago</p>
                        </div>
                    </div>
                    {/* <CiMenuKebab></CiMenuKebab> */}
                </div>
            </div>
            <div className="myjobs_widget_body">
                <div className="myjobs_widget_header">
                    <p>Learn what hiring managers look for in answers to top interview questions</p>
                </div>
                <div className="myjobs_widget_content" onClick={questionsFunction}>
                    <div className="myjobs_widget_img">
                        <img src="https://media.licdn.com/media/AAUQAgROAAgAAQAAAAAAAAquAAAAJDkzNThjZmEwLTkwOTktNDFiZC05MjUwLWYzZWZlYzE0YjY4ZA.png"></img>
                    </div>
                    <div className="myjobs_widget">
                        <p>Do you have any questions for me?</p>
                    </div>
                </div>
                <div className="myjobs_widget_content" onClick={questionsFunction}>
                    <div className="myjobs_widget_img">
                        <img src="https://media.licdn.com/media/AAUQAgROAAgAAQAAAAAAAAcHAAAAJDE4MWM1NTc4LTAwNDUtNDI0Ny1iZTMyLTBhZjBiNjg0ODQwNw.png"></img>
                    </div>
                    <div className="myjobs_widget">
                        <p>Tell me about a time you were successful on a team.</p>
                    </div>
                </div>
                <div className="myjobs_widget_content" onClick={questionsFunction}>
                    <div className="myjobs_widget_img">
                        <img src="https://media.licdn.com/media/AAUQAgROAAgAAQAAAAAAAAcHAAAAJDE4MWM1NTc4LTAwNDUtNDI0Ny1iZTMyLTBhZjBiNjg0ODQwNw.png"></img>
                    </div>
                    <div className="myjobs_widget">
                        <p>Tell me about a time when you created a goal and achieved it.</p>
                    </div>
                </div>
                <div className="myjobs_widget_footer">
                    <p>See all questions</p>
                </div>
            </div>
            
            <Footer></Footer>
        </div>}
        <div className={alreadyApplied}>
            <div className="already_applied_popup">
                <h1>You have already applied for this job</h1>
                <button onClick={alreadyAppliedFunction}>OKAY</button>
            </div>
        </div>
        <div className={questionsPopup}>
            <div className="questions_popup">
                <h1>This feature is not available yet!!!</h1>
                <button onClick={questionsFunction}>OKAY</button>
            </div>
        </div>
        </>
    )
}