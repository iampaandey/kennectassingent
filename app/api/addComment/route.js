import { connectoDb } from "@utils/database";
const Blog = require("@models/blogs.js");
export const POST = async(req, res)=>{
try {
    await connectoDb();
    const body = await req.json();
    const {id, username, comment} =body;
    const post = await Blog.findById(id);
    console.log(post)
    const arr = post.comments;
    arr.push({username, comment})
    post.comments = arr;
    await post.save();
    console.log(post);
    return new Response(JSON.stringify({message:"Comment added sucessfully"}),{status:201});

} catch (error) {
    console.log(error)
    return new Response(JSON.stringify({message:"Error occured"}),{status:404});

}
}