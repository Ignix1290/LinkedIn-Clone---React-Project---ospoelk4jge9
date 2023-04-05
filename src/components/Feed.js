import React from "react";
import "../styles/Feed.css";
import Post from "./Post";
import { FaUserCircle } from "react-icons/fa";
import "../styles/pic.jpg";

function Feed(){
    return (
        <div className="feed">
            <div className="feed__input">
                {/* <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img> */}
                <FaUserCircle src="pic.jpg"/>
                <form>
                    <input type="text" placeholder="Post Something"></input>
                    <input type="submit"></input>
                </form>
            </div>

            <div className="feed__options">
                <div className="option">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/9554/9554987.png"></img>
                        <span>Photo</span>
                    </div>
                    
                    <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/2839/2839026.png"></img>
                    <span>Video</span>
                    </div>

                    <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/1048/1048953.png"></img>
                    <span>Event</span>
                    </div>

                    <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/6612/6612250.png"></img>
                    <span>Write Article</span>
                    </div>
                </div> 
            </div>
            <Post name="Samuel Lakra" description="LinkedIn Clone" message="Inside Body" photoURL=""></Post>
        </div>
    )
}

export default Feed;