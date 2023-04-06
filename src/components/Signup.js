import React, { useRef } from "react";
import "../styles/Signup.css";
import { FcGoogle } from "react-icons/fc";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

function Signup(){

    const emailInput = useRef();
    const passwordInput = useRef();
    const navigate = useNavigate();

    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");

    const HandleSubmit = (e)=>{
        e.preventDefault();
        console.log(emailInput.current.value)
        if(emailInput.current.value !== "" && passwordInput.current.value != "")
        {
            localStorage.setItem("emailData",emailInput.current.value);
            localStorage.setItem("passwordData",passwordInput.current.value);
            console.log("Sign up successfull");
            navigate("/");
            console.log("It works");
        }
    }

    return(
        <div className="login_info">
            <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png"></img>
            <h1>Make the most of your professional life</h1>
            <div className="form_body">
            <form>
                <div className="login_form">
                  Email or Phone Number <input type="text" ref={emailInput}></input>
                  Password (6 or more characters)<input type="password" ref={passwordInput}></input>
                  <span>By clicking Agree & Join, you agree to LinkedIn<span className="colourful">User Agreement, Privacy Policy</span> and <span className="colourful">Cookie Policy.</span></span>
                  <button type="submit" onClick={HandleSubmit}>Agree & Join</button>
                  <div className="bottom">
                    <button type="submit" className="SignUp"><FcGoogle></FcGoogle>Sign up with Google</button>
                    <p>Already on LinkedIn? <NavLink to="/"><span className="SignIn">Sign in</span></NavLink></p>
                  </div>
                </div>
            </form>
            </div>
            <span className="afterForm">Looking to create a page for a business? <span className="getHelp">Get help</span></span>
        </div>
    )
}

export default Signup;