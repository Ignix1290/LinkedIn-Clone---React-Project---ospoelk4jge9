import React, { useRef, useState } from "react";
import "../styles/Feed.css";
import Post from "./Post";
import { FaUserCircle } from "react-icons/fa";
import "../styles/pic.jpg";

function Feed(){

    const newPost = useRef();
    const [posts, setPosts] = useState([]);
    let postTemplate = {
        name: "Samuel Lakra",
        description: "LinkedIn Clone"
    }

    function addPost() {
        postTemplate.message = newPost.current.value;
        // posts.push(postTemplate);
        let updatedPosts = [...posts, postTemplate];
        setPosts(updatedPosts);
        console.log(posts);
    }

    return (
        <div className="feed">
            <div className="feed__input">
                {/* <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img> */}
                <FaUserCircle/>
                <form>
                    <input ref={newPost} type="text" placeholder="Post Something"></input>
                    <button type="button" onClick={addPost}>POST</button>
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
            <div>
            {posts.map((post,index) => {
               return  <Post key={index} name={post.name} description={post.description} message={post.message}></Post>
            })
            }
            </div>

        </div>
    )
}

export default Feed;