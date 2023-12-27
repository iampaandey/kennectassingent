import mongoose from 'mongoose';

export const connectoDb=async()=>{
    try {
        mongoose.connect("mongodb+srv://pandeyraghav349:N5eAZq6m2yG09saG@cluster0.sdcfyxb.mongodb.net/?retryWrites=true&w=majority").then(()=>{
            console.log("DB Connected")
        })
        .catch(()=>{
            console.log("Couldn't Connect !")   
        })
        
    } catch (error) {
        console.log(error)
    }
}