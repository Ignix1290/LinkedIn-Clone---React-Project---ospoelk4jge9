import React, { useRef, useState } from "react";
import "../styles/Feed.css";
import Post from "./Post";
import { FaUserCircle } from "react-icons/fa";
import "../styles/pic.jpg";
import { AiOutlineClose } from "react-icons/ai";

function Feed(){

    const newPost = useRef();
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState("modal_deactivated");
    let postTemplate = {
        name: "Samuel Lakra",
        description: "LinkedIn Clone"
    }

    function addPost() {
        if(newPost.current.value !== ''){
            postTemplate.message = newPost.current.value;
            // posts.push(postTemplate);
            let updatedPosts = [...posts, postTemplate];
            setPosts(updatedPosts);
            console.log(posts);
            setModal("modal_deactivated");
            document.getElementById("post_textarea").value = '';
        }
    }

    function modalFunction(){
        if(modal === "modal_deactivated"){
            setModal("modal_activated");
            document.getElementById("post_textarea").focus();
        }
        else{
            setModal("modal_deactivated");
        }
        
    }

    return (
        <div className="feed">
            <div className="feed__input">
                {/* <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img> */}
                <FaUserCircle/>
                <form>
                    <input className="input"  type="text" placeholder="Start a post" onClick={modalFunction}></input>
                    {/* <button type="button" onClick={addPost}>POST</button> */}
                </form>
            </div>

            <div className="feed__options">
                <div className="option">
                    <div>
                        <img className="options_img" src="https://cdn-icons-png.flaticon.com/128/9554/9554987.png"></img>
                        <span>Photo</span>
                    </div>
                    
                    <div>
                    <img className="options_img" src="https://cdn-icons-png.flaticon.com/128/2839/2839026.png"></img>
                    <span>Video</span>
                    </div>

                    <div>
                    <img className="options_img" src="https://cdn-icons-png.flaticon.com/128/1048/1048953.png"></img>
                    <span>Event</span>
                    </div>

                    <div>
                    <img className="options_img" src="https://cdn-icons-png.flaticon.com/128/6612/6612250.png"></img>
                    <span>Write Article</span>
                    </div>
                </div> 
            </div>
            <div>
            {posts.map((post,index) => {
               return  <Post key={index} name={post.name} description={post.description} message={post.message}></Post>
            })
            }
            </div>

            
                <div className={modal}>
                    <div className="post_modal">
                        <div className="user_data">
                           <FaUserCircle className="user_logo"></FaUserCircle>
                           <div>
                              <h1>{localStorage.getItem("emailData")}</h1>
                              <p>Post to Anyone</p>
                           </div>
                        </div>
                        
                        <AiOutlineClose className="x" onClick={modalFunction}></AiOutlineClose>
                        <textarea style={{width:"100%", height:"60%"}} ref={newPost} id="post_textarea" placeholder="What do you want to talk about?"></textarea>
                        <button type="button" onClick={addPost} className="post_button">Post</button>
                    </div>
                </div>
            

        </div>
    )
}

export default Feed;