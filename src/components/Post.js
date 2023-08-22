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
    const [comment, setComment] = useState("comment_box_deactivated");
    const [inputValue, setInputValue] = useState('');
    const [postedComment, setPostedComment] = useState();
    const [hideComment, setHideComment] = useState('posted_comment_box_deactivated');
    const [commentLike, setCommentLike] = useState("comment_disliked");

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
        setComment("comment_box_activated");
    }

    function postCommentFunction(){
        setPostedComment(<p>{inputValue}</p>);
        setComment("comment_box_deactivated");
        setHideComment("posted_comment_box_activated");
    }

    function commentLIkeFunction(){
        if(commentLike==="comment_disliked"){
            setCommentLike("comment_liked");
        }
        else{
            setCommentLike("comment_disliked");
        }
    }
    return(
        <>
        <div className="posts">
            <div className="post__header">
                <div className="post__headerLeft">
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png"></img> */}
                    <FaUserCircle/>
                    <div className="post_profile_details">
                        <h3>{localStorage.getItem("emailData")}</h3>
                        <p>{props.Description}</p>
                    </div>
                </div>

                {/* <div className="post__headerRight">
                    <span><BsThreeDotsVertical/></span>
                </div> */}
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

            </div>
        </div>
        <div className={comment}>
            <div className="comment_box">
             <FaUserCircle/>
             <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Add a comment..."></input>
             <button type="button" className="post_comment_button" onClick={postCommentFunction}>Post</button>
            </div>
        </div>
        <div className={hideComment}>
            <div className="posted_comment_box">
                <FaUserCircle/>
                <div className="commented_body">
                    <h3>{localStorage.getItem("emailData")}</h3>
                    {postedComment}
                </div>
                <p className={commentLike} onClick={commentLIkeFunction}>Like</p>
            </div>
        </div>
        </>
    )
}

export default Post;