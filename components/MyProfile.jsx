"use client"

import { useEffect, useState } from "react";
import TextBox from "./TextBox";
import Login from "./Login";

const MyProfile = () => {
   
   
    const [isLogin,setIsLogin]=useState(false);

    const handleLogOut=()=>{
      if (typeof window !== 'undefined') {

        localStorage.removeItem("user");
      }
     setIsLogin(false);
    }
    useEffect(()=>{
      if(localStorage.getItem('user')!==null && typeof window !== 'undefined' ){
        setIsLogin(true);
      }
    },[])
    useEffect(()=>{

    },[isLogin])





  return (
    <div className="myprofile">
      <div className="profile-section">
      {isLogin ? <button className="btn-lgout"
      onClick={handleLogOut} 
      >Log Out</button> : ""}
      </div>
      {
        isLogin ? <TextBox/>:<Login isLogin={isLogin} setIsLogin={setIsLogin}/>
      }

    
      </div>
    
  )
}

export default MyProfile
