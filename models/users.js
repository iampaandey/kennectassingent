import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    username:String,
    password:String,
    blogs:[Object]
})

module.exports= mongoose.models.User || mongoose.model('User',UserSchema); 