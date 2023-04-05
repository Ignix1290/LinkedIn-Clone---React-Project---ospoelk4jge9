import React from "react";
import '../styles/Header.css';
import HeaderOptions from "./HeaderOptions";


function Header(){
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"></img>
                </div>
                <div className="header__search">
                    <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png"></img>
                    <input type="text" placeholder="Search"></input>
                </div>

            </div>
            <div className="header__right">
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img>} title="Home"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/681/681494.png"></img>} title="Network"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/522/522510.png"></img>} title="Jobs"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/3193/3193061.png"></img>} title="Message"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/3602/3602123.png"></img>} title="Notification"/>
                <HeaderOptions Icon={<img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img>} title="Samuel Lakra"/>
            </div>
        </div>
    )
}

export default Header;