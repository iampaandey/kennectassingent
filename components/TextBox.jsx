"use client"
import { useState } from "react"
import Buttn from "./Buttn"


const TextBox = () => {

  const [currPara, setCurrPara] = useState("");
  const [currTagValue, setCurrTagValue] = useState("");
  const [title, setTitle] = useState("");


  const handleClick = async(e) => {
    if (localStorage.getItem('user') !== null) {
      var user;
      if (typeof window !== 'undefined') {
        user= JSON.parse(localStorage.getItem('user'))?.username;

      }
      const formData = {
        paraText: currPara,
        tag: currTagValue,
        title: title,
        username: user
      }
      
      const response=await fetch("./api/blogpost",{
        method:'POST',
        body:JSON.stringify(formData)
      })

     if(response.status===200){
      setCurrPara("");
      setCurrTagValue("");
      setTitle("");
      alert("Your Post Uploaded!")
  
     }
    }
    else {
      console.log("nOT LOgIn")
      alert('Click on Profile & Login First!')
    }
  }


  return (
    <form className="textbox-main" id="form-1">
      <input type="text" name="title" id="title" placeholder="Title" value={title}
        onChange={(e) => {
          setTitle(e.target.value)

        }} />
      <textarea name="textbox" id="1" cols="50" rows="15" placeholder="Write Something Cool Today!" value={currPara}
        onChange={(e) => {
          setCurrPara(e.target.value)

        }}
      />
      <Buttn value={"Submit"}
        handleClick={handleClick}
      />
    </form>
  )
}

export default TextBox
