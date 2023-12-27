import { connectoDb } from "@utils/database";

const User=require("@models/users.js")
export const POST=async(req,res)=>{
      const body=await req.json();
      const {name}=body;
      await connectoDb();
      const user=await User.findOne({username:name});
      if(user){
        return new Response(JSON.stringify({message:"User Already Registered!"}))
      }
      else{
        const nuser=new User();
        nuser.username=body.name;
        nuser.password=body.password;
        await nuser.save();
        console.log(nuser);
        return new Response(JSON.stringify({message:"Registered Successfully!"}))
      }

}