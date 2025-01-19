import mongoose from "mongoose";

const users = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"USER"
    },
    createdAt:{
        type:String,
        default:Date.now()
    }
})

export const User = mongoose.model("User", users)