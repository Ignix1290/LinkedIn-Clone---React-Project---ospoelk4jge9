
import React, { useRef, useEffect } from "react";
import "../styles/Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Signin = (props) => {

    const emailInput = useRef();
    const passwordInput = useRef();
    const navigate = useNavigate();

    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");

    function handleCallBackResponse(response){
        console.log("Encoded JWT ID Token: " + response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        props.setLoggedIn(true);
        navigate("/home");
    }

    useEffect(()=>{
        /*global google*/
        google.accounts.id.initialize({
            client_id: "718946481304-016uv5er8td7cdmmh2bphhqqev3sm1vg.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("google_signin"),
            {theme: "outline", size: "large"}
        );
        // google.accounts.id.prompt();
    },[])

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
                  <p>Email or Phone Number</p> <input type="text" ref={emailInput}></input>
                  <p>Password (6 or more characters)</p><input type="password" ref={passwordInput}></input>
                  <span>By clicking Agree & Join, you agree to LinkedIn<span className="colourful">User Agreement, Privacy Policy</span> and <span className="colourful">Cookie Policy.</span></span>
                  <button type="submit" onClick={HandleSubmit}>Login</button>
                  <div className="bottom">
                    <p id="google_signin"></p>
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