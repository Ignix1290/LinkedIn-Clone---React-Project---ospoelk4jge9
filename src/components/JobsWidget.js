import React from "react";
import '../styles/JobsWidget.css';
import About from "./About";
import { FcViewDetails } from "react-icons/fc";

export default function JobsWidget(){
    return(
        <div className="jobs_widget">
            <div className="jobs_widget_top">
                <div className="job_header">
                    <h3>Job seeker guidance</h3>
                    <p>Recommender based on your activity</p>
                </div>
                <div className="jobs_below_header">
                    <p>I want to improve my resume</p>
                    <FcViewDetails></FcViewDetails>
                </div>
                <div className="job_content">
                    Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.
                </div>
            </div>
            <div className="jobs_widget_bottom">
                <About></About> 
            </div>
            
        </div>
    )
}