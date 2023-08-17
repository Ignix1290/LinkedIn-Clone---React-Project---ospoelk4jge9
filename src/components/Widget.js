import React from "react";
import "../styles/Widget.css";
import { BsInfoCircle } from "react-icons/bs";
import About from "./About";

function Widget(){
    return (
        <>
        <div className="widget">
            <div className="widget_top">
                <div className="widget__header">
                    <h4>LinkedIn News</h4>
                    <BsInfoCircle></BsInfoCircle>
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Accenture to lay off 19000</h4>
                            <p>top news . 9,974 readers</p>
                        </li>
                        <li>
                            <h4>Sweat is out for summer clothing</h4>
                            <p>23h ago</p>
                        </li>
                        <li>
                            <h4>Banking crisis: IT cos brace for impact</h4>
                            <p>1d ago . 436 readers</p>
                        </li>
                        <li>
                            <h4>Vehicles set to get costlier</h4>
                            <p>1d ago . 170 readers</p>
                        </li>
                    </ul>
                </div>
            </div>
            <About></About>
        </div>
        
        </>
    )
}

export default Widget;