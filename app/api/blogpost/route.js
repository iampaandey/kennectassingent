import { connectoDb } from "@utils/database";

const Blog = require("@models/blogs.js")
export const POST = async (req, res) => {
    const body = await req.json();
    await connectoDb();
    const nblog = new Blog({ ...body });
    await nblog.save();
    return new Response(JSON.stringify({ message: "Blog Posted Successfully !" }))
}

