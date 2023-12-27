import { connectoDb } from "@utils/database";
const Blog = require("@models/blogs.js");
export const POST = async(req, res)=>{
    try {
        await connectoDb();
        const body = await req.json()
        const {id} = body;
        const post = await Blog.findById(id)
        const data = post.comments;
        return new Response(JSON.stringify(data),{status:200});
    } catch (error) {
        return new Response({message:"Error occured"},{status:400});
    }
}