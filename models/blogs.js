import mongoose, { Schema, model, models } from 'mongoose';

const BlogSchema=new Schema({
    title:String,
    paraText:String,
    tag:String,
    username:String,
    comments:[Object]
})
module.exports= mongoose.models.Blog || mongoose.model('Blog',BlogSchema); 