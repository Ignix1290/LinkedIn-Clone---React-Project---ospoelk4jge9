import React from 'react';
import "../styles/Footer.css";
import { BsQuestionSquareFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { BsShieldShaded } from "react-icons/bs";

export default function Footer(){
    return(
        <div className='footer_body'>
            <div className='footer_left'>
                <p>About</p>
                <p>Accessibility</p>
                <p>Talent Sloutions</p>
                <p>Community Guidlines</p>
                <p>Careers</p>
                <p>Marketting Solutions</p>
                <p>Ad Choices</p>
                <p>Advertising</p>
                <p>Sales Solutions</p>
                <p>Mobile</p>
                <p>Small Business</p>
                <p>Safety center</p>
            </div>
            <div className='footer_right'>
                <h4><BsQuestionSquareFill></BsQuestionSquareFill>Questions</h4>
                <p>Visit our help center</p>
                <h4><IoIosSettings></IoIosSettings>Manage your account and privacy</h4>
                <p>Go to your settings</p>
                <h4><BsShieldShaded></BsShieldShaded>Recommendation transparency</h4>
                <p>Learn more about recommended content</p>
            </div>
            <div className='language'>
                <p>Language - English</p>
            </div>
            <div className='footer_logo'>
                <p>LinkedIn Corporation © 2023</p>
            </div>
        </div>
    )
}