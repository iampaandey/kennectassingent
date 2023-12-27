import { connectoDb } from "@utils/database";
const Blog = require("@models/blogs.js")

export const GET = async (req, res) => {
    await connectoDb();
    const blogArr=await Blog.find({});
    return new Response(JSON.stringify(blogArr));
}

