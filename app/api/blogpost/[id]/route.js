import { connectoDb } from "@utils/database";

const Blog = require("@models/blogs.js")
export const POST = async (req, res) => {
    const body = await req.json();
    const id=body.id
    await connectoDb();
    const nblog = await Blog.findOne({_id:id});
    return new Response(JSON.stringify(nblog));
}

