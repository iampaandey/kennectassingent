"use client"

import { useEffect, useState } from "react";
import TextBox from "./TextBox";
import Login from "./Login";

const MyProfile = () => {
    // const userName=JSON.parse(localStorage.getItem('user')).username;
    // const [arr,setArr]=useState([]);

    // useEffect(()=>{
    //  const allblgs=JSON.parse(localStorage.getItem('arrBlogs'));
    //  console.log(allblgs);
    //  console.log(userName);
    //  const arr1=allblgs?.filter((e)=>{
    //     return e?.username===userName
    //  })
    //  setArr(arr1);
    //  console.log(arr1);
    // },[])
    const [isLogin,setIsLogin]=useState(false);

    const handleLogOut=()=>{
     localStorage.removeItem("user");
     setIsLogin(false);
    }
    useEffect(()=>{
      if(localStorage.getItem('user')!==null){
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
