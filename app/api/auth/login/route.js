import { connectoDb } from "@utils/database";

const User=require("@models/users.js")
export const POST=async(req,res)=>{
      const body=await req.json();
      const {username}=body;
      await connectoDb();
      const user=await User.findOne({username:username});
      if(user){
         if(body?.password===user?.password){
            console.log(user);
           return new Response(JSON.stringify(user));
         }else{
          return new Response(JSON.stringify(user));
         }
      }
      else{
        const nuser = await new User({username})
        await nuser.save();
        return new Response(JSON.stringify(nuser))
      }

}