const asyncHandler = require("express-async-handler");
const Contact = require("../models/conatctModel")
//@desc Get all contacts
//@route GET/api/contacts
//acess public

const getContact = asyncHandler(async (req, res) => {
    const contacts = Contact.find();
    res.status(200).json(contacts)
    
});

const createContact = asyncHandler(async(req, res) => {
    console.log(`The request body is:`, req.body);
    const { name, email, contact } = req.body;
    if (!name || !email || !contact) {
        res.status(400);
        throw new Error(`All feilds are mandetary`)
    }
    res.status(200).json({messege:`Create all conatcts`})
    
})
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({messege:`Update all contacts for ${req.params.id}`})
    
})
const deleteContacts = asyncHandler(async(req, res) => {
    res.status(200).json({messege:`Delete all contacts for ${req.params.id}`})
})


module.exports = { getContact,createContact,updateContact,deleteContacts };