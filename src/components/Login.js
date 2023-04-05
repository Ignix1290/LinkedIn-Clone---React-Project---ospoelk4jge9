import React, { useRef } from "react";
import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";

function Login(){

    const emailInput = useRef();
    const passwordInput = useRef();

    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");

    const HandleSubmit = (e)=>{
        e.preventDefault();
        if(emailInput.current.value == "ignix@gmail.com" && passwordInput.current.value == "ignix123")
        {
            localStorage.setItem("emailData","ignix@gmail.com");
            localStorage.setItem("passwordData","ignix123");
            console.log("Login successfull");
        }
        console.log("It works");
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
                    <p>Already on LinkedIn? <span className="SignIn">Sign in</span></p>
                  </div>
                </div>
            </form>
            </div>
            <span className="afterForm">Looking to create a page for a business? <span className="getHelp">Get help</span></span>
        </div>
    )
}

export default Login;