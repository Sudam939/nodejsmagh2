import mongoose from "mongoose";

const companies = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const Company = mongoose.model("Company", companies)