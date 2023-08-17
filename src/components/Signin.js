
import React, { useRef } from "react";
import "../styles/Signup.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

const Signin = (props) => {

    const emailInput = useRef();
    const passwordInput = useRef();
    const navigate = useNavigate();

    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");

    const HandleSubmit = (e)=>{
        e.preventDefault();
        if(emailInput.current.value == getEmail && passwordInput.current.value == getPassword)
        {
            props.setLoggedIn(true);
            navigate("/home");
        }
        console.log("It works");
    }

    return(
        <div className="login_info">
            <img className="linkedin_logo" src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png"></img>
            <h1>Make the most of your professional life</h1>
            <div className="form_body">
            <form>
                <div className="login_form">
                  Email or Phone Number <input type="text" ref={emailInput}></input>
                  Password (6 or more characters)<input type="password" ref={passwordInput}></input>
                  <span>By clicking Agree & Join, you agree to LinkedIn<span className="colourful">User Agreement, Privacy Policy</span> and <span className="colourful">Cookie Policy.</span></span>
                  <button type="submit" onClick={HandleSubmit}>Login</button>
                  <div className="bottom">
                    <p>New to LinkedIn? <NavLink to="/signup"><span className="SignIn">Sign Up</span></NavLink> </p>
                  </div>
                </div>
            </form>
            </div>
            <span className="afterForm">Looking to create a page for a business? <span className="getHelp">Get help</span></span>
        </div>
    )

}

export default Signin;