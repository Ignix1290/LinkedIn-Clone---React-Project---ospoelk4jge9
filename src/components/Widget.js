import React from "react";
import "../styles/Widget.css";
import { BsInfoCircle } from "react-icons/bs";

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

            <div className="widget_bottom">
                <div className="widget__header">
                    <h4>Today's top courses</h4>
                    <BsInfoCircle></BsInfoCircle>
                </div>
                <ul className="widget__options">
                <li>
                            <h4>Leading with a Heavy Heat</h4>
                            <p>Kay Coly</p>
                        </li>
                        <li>
                            <h4>Building Resillience</h4>
                            <p>2d ago . 3,389 readers</p>
                        </li>
                        <li>
                            <h4>Critical Thinking for better judgement</h4>
                            <p>3d ago . 3,456 readers</p>
                        </li>
                        <li>
                            <h4>Shorter hour boost productivity</h4>
                            <p>4d ago . 455 readers</p>
                        </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Widget;