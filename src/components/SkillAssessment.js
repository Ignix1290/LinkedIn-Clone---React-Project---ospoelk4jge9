import React,{useState, useEffect} from "react";
import Header from "./Header";
import "../styles/SkillAssessment.css";
import FadeLoader from "react-spinners/FadeLoader";
import Footer from "./Footer";

export default function SkillAssessment(){
    const [loader, setLoader] = useState(false);
    const [moreSkills, setMoreSkills] = useState("more_skill_deactivated");
    const [skillCompleted, setSkillCompleted] = useState("skill_completed_deactivated");

    useEffect(()=>{
      setLoader(true);
      setTimeout(()=>{
        setLoader(false);
      },1000)
    },[])

    function moreSkillsFunction(){
        if(moreSkills==="more_skill_deactivated"){
            setMoreSkills("more_skill_activated");
        }
        else{
            setMoreSkills("more_skill_deactivated");
        }
    }

    function skillCompletedFunction(){
        if(skillCompleted === "skill_completed_deactivated"){
            setSkillCompleted("skill_completed_activated");
        }
        else{
            setSkillCompleted("skill_completed_deactivated");
        }
    }
    return(
        <>
        <Header></Header>
        {loader ? <FadeLoader className="loader" color={"#ccc"} loading={loader} size={50}/>:
        <div className="skill_assessment_body">
            <div className="skill_assessment_feed">
                <div className="skill_assessment_header">
                    <h2>Skill assessments</h2>
                    <p>Check your skill level. Answer 15 multiple choice questions, score in the top 30%, and earn a skill badge.</p>
                </div>
                <div className="skill_content_header">
                    <button className="skill_content_button">All</button>
                    <button className="skill_content_button">Recommended</button>
                </div>
                <div className="skill_content_body" onClick={skillCompletedFunction}>
                    <div className="skill_content_img">
                        <img src="https://media.licdn.com/media/AAYQAQSZAAgAAQAAAAAAABu2v0Ua5w2jRuOvJE7JAGuwDw.png"></img>
                    </div>
                    <div className="skill_content">
                        <h2>MySQL</h2>
                        <p>Topics: Aggregations, Database Administration, Queries, Server Administration, Stored Procedures and Functions
                           2M people took this</p>
                    </div>
                </div>
                <div className="skill_content_body" onClick={skillCompletedFunction}>
                    <div className="skill_content_img">
                        <img src="https://media.licdn.com/media/AAYQAQSZAAgAAQAAAAAAABYQDnbtgNYvTNG8bYmJfDY3AQ.png"></img>
                    </div>
                    <div className="skill_content">
                        <h2>JavaScript assessment</h2>
                        <p>Topics: Data Types and Structures; Functions, Objects, and Classes; JavaScript Fundamentals; Logic and Control Flow; Web Development
                           2.5M people took this</p>
                    </div>
                </div>
                <div className="skill_content_body" onClick={skillCompletedFunction}>
                    <div className="skill_content_img">
                        <img src="https://media.licdn.com/media/AAYQAQSZAAgAAQAAAAAAABPIj0yNMKrJR96eOuPB_YDI0A.png"></img>
                    </div>
                    <div className="skill_content">
                        <h2>Java assessment</h2>
                        <p>Topics: Control Flow, Core API, Functional Programming, Fundamentals, Object-Oriented Programming
                           3M people took this</p>
                    </div>
                </div>
                <div className="sill_assessment_footer">
                    <h3 onClick={moreSkillsFunction}>Show more assessments</h3>
                </div>
            </div>
            <div className="skill_assessment_widget">
                <h3>Your assessments</h3>
                <div className="skill_assessment_score">
                    <p className="skill_score_zero">3</p>
                    <p className="skill_score_zero">0</p>
                    <p>Badge</p>
                    <p>To retake</p>
                </div>
                <div className="skill_score_img">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKRtjwWxWmSHtY36m2ZVQUwBC8saVmdbqJWS4Y9WYLN7iSw6WK"></img>
                </div>
            </div>
        </div>}
        <div className="skill_footer"><Footer></Footer></div>
        <div className={moreSkills}>
            <div className="more_skill_popup">
                <h1>No more assessments are there</h1>
                <button onClick={moreSkillsFunction}>OKAY</button>
            </div>
        </div>
        <div className={skillCompleted}>
            <div className="skill_completed_popup">
                <h1>You have already completed this assessment</h1>
                <button onClick={skillCompletedFunction}>OKAY</button>
            </div>
        </div>
        
        </>
    )
}