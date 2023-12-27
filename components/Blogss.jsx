"use client"

import { useEffect, useState } from "react"
import Card from "./Card";

const Blogss = () => {
  const data = JSON.parse(localStorage.getItem('arrBlogs'));
  const [blgArr, setBlgArr] = useState([]);


  const fetchData = async () => {
    let data;
    console.log("hello")
    const response = await fetch("./api/getblogs", {
      method: 'GET',
    });
    data = await response.json();
    localStorage.setItem("arrBlogs", JSON.stringify(data));
    setBlgArr(data);
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, [])

  const handleSearch = (value) => {
    console.log(blgArr)
    if (value.length === 0) {
      setBlgArr(JSON.parse(localStorage.getItem("arrBlogs")))
    }
    else {
      const str = value;
      console.log(value)
      let arr1 = data?.filter((post) => {
        return post?.title?.toLowerCase().includes(value.toLowerCase());
      })
      console.log(arr1);
      if (arr1.length > 0) {
        setBlgArr(arr1);
      }
      else {
        const arr2 = data?.filter((post) => {
          console.log(post.comments)
          const dt = post?.comments?.filter((e) => {
            return e?.comment.toLowerCase().includes(value.toLowerCase());
          })
          return dt.length;
        })
        setBlgArr(arr2);
      }
    }

  }




  return (<div className="main-post">
    <div className="search-Box">
      <input type="text" autocomplete="off" className="search-bx" name="search" id="search" placeholder="Search with Title or Author"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
    </div>
    <div className="allblg-main">
      {
        blgArr.length ?
          blgArr?.map((post) => {
            return <Card key={post?.id} comments={post?.comments} fetchData={fetchData} id={post?._id} title={post?.title} tag={post?.tag} paraText={post?.paraText} user={post?.username}
            />
          }) :
          <h3>Nothing To Show</h3>
      }
    </div>
  </div>
  )
}

export default Blogss;
