import React, { useState } from "react";
import "../styles/Post.css";
import { FaLocationArrow } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";


function Post(props){
    const [likeIcon,setLikeIcon] = useState('dislike');
    function likeFunc(){
        if(likeIcon=="dislike"){
            setLikeIcon('like');
        }
        else{
            setLikeIcon('dislike');
        }
    }
    return(
        <div className="posts">
            <div className="post__header">
                <div className="post__headerLeft">
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img> */}
                    <FaUserCircle/>
                    <div className="post_profile_details">
                        <h3>{props.name}</h3>
                        <p>{props.Description}</p>
                    </div>
                </div>

                <div className="post__headerRight">
                    <span><BsThreeDotsVertical/></span>
                </div>
            </div>
            
            <div className="post__body">
                <p>{props.message}</p>
            </div>

            <div className="post__footer">
                <div className="post__footer__options">
                    <div className={likeIcon} onClick={likeFunc}>
                    <AiTwotoneLike></AiTwotoneLike>
                    </div>
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/535/535190.png"></img> */}
                    <span>Like</span>
                </div>

                <div className="post__footer__options">
                    <BiCommentDetail></BiCommentDetail>
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/3193/3193061.png"></img> */}
                    <span>Comment</span>
                </div>

                <div className="post__footer__options">
                    <BsFillShareFill></BsFillShareFill>
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/929/929539.png"></img> */}
                    <span>Share</span>
                </div>

                <div className="post__footer__options">
                    <FaLocationArrow></FaLocationArrow>
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/1933/1933005.png"></img> */}
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default Post;