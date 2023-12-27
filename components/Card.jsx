"use client"
import React, { useEffect, useRef, useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import CommentCard from './CommentCard';
import Buttn from './Buttn';


const Card = ({ title, tag, paraText, user, id, fetchData, comments }) => {
  const [commentValue, setCommentValue] = useState("");

  const [show, setShow] = useState(false);
  useEffect(()=>{
   fetchData();
  },[])
  var username;
  if (typeof window !== 'undefined') {
    username=JSON.parse(localStorage.getItem('user'))?.username;
  }
  
  const handleAddComment = async () => {
    const formData = {
      comment: commentValue,
      username,
      id
    }
    setCommentValue("");
    const response = await fetch(`./api/addComment`, {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    if (response.status === 201) {
      fetchData();
      alert("Comment added succesfully !")
    }
    else {
      alert("Some Glitch Occurred !")
    }
  }
  return (
    <>
      <div className='card-body' >
        <h4 className='card-title'>{title}</h4>
        <p>{paraText}</p>
        <h4>Posted By : {user}</h4>
        <FaRegComment className='commentBox' onClick={() => { setShow(!show) }} />
        <div >
          {
            show ?
              <div className="commentSection">

                {comments?.map((e) => {
                  return <CommentCard username={e?.username} comment={e?.comment} />
                })}
                <div className="commentInput">
                  <input type="text" name="" id="" value={commentValue} onChange={(e) => { setCommentValue(e.target.value) }} />
                  <Buttn value={"Add Comment"} handleClick={handleAddComment} />
                </div>
              </div>
              : ""
          }
        </div>
      </div>
    </>
  )
}

export default Card
