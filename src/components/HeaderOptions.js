import React from "react";
import "../styles/Header.css";
import { MdAccountCircle } from "react-icons/md";
import { Avatar } from "@material-ui/core";

function HeaderOptions(props){
    return(
        <div className="header__options">
            {props.Icon}
            {props.title}
        </div>
    )
}

export default HeaderOptions;