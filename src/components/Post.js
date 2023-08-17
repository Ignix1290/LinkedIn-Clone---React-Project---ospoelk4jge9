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
    // const [count, setCount] = useState(0);

    // function likeFunc(){
    //     setCount(count+1);
    // }
    function commentFunction(props){
        setCommentsCount(commentsCount+1);
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
                    <span>Like</span>
                </div>

                <div className="post__footer__options" onClick={commentFunction}>
                    <BiCommentDetail></BiCommentDetail>
                    <span>Comment</span>
                </div>

                {/* <div className="post__footer__options">
                    <BsFillShareFill></BsFillShareFill>
                    <span>Share</span>
                </div>

                <div className="post__footer__options">
                    <FaLocationArrow></FaLocationArrow>
                    <span>Send</span>
                </div> */}
            </div>
        </div>
    )
}

export default Post;