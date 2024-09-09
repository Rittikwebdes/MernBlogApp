import mongoose from "mongoose";
import validator from "validator"

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    message:{
        type:String,
        required:true
    }
})

export const Contact = mongoose.model("Contact",contactSchema)