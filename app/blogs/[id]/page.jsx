"use client"

import Card from "@components/Card";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";


const page = () => {
  const params = useParams();
  const [arr,setArr]=useState([]);
  useEffect(()=>{
  const narr= (JSON.parse(localStorage.getItem('arrBlogs'))).filter((post)=>{
    console.log(post);
    return post?.id===parseInt(params.id,10)
   })
   console.log(narr);
   setArr(narr);
  },[])
  return (
    <div className="dynamic-main">
     {
        arr?.map((e)=>{
            return <Card  title={e?.title} paraText={e?.paraText} tag={e?.tag} user={e?.user}id={e?.id}/>
        })
     }
        
    </div>
  )
}

export default page
