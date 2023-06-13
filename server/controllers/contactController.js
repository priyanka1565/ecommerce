//@desc Get all contacts
//@route GET/api/contacts
//acess public

const getContact = (req, res) => {
    res.status(200).json({ messege: `Get all contacts` })
    
};

const createContact = (req, res) => {
    console.log(`The request body is:`,req.body)
    res.status(200).json({messege:`Create all conatcts`})
    
}
const updateContact = (req, res) => {
    res.status(200).json({messege:`Update all contacts for ${req.params.id}`})
    
}
const deleteContacts = (req, res) => {
    res.status(200).json({messege:`Delete all contacts for ${req.params.id}`})
}


module.exports = { getContact,createContact,updateContact,deleteContacts };