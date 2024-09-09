import { Contact } from "../models/contact.model.js";

export const getContacts = async (req, res) => {
    try {
        const {name,email,message} = req.body;
        if(!name || !email || !message) {
            return res.status(400).json({message:"All fields are required"})
        }
        const user = await Contact.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists...try again with different email"})
        }
        const newContact = new Contact({
            name,
            email,
            message
        })
        await newContact.save()
        console.log(newContact)
        res.status(200).json({message:"Message Successfully sent"})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}