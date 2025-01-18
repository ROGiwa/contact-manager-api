const getContacts = (req, res) => {
    res.status(200).json({message: "get all contacts"});
}

const getContact = (req, res) => {
    res.status(200).json({message: `get contact for ${req.params.id}`});
}

const createContact = (req, res) => {
    console.log("The body is :", req.body)
    const {name, email, contact} = req.body;
    if(!name || !email || !contact){
        res.status(400); 
        throw new Error("All fields are mandatory");
        
    }
    res.status(201).json({message: "create contact"});
}

const updateContact = (req, res) => {
    res.status(200).json({message: `update contact for ${req.params.id}`});
}

const deleteContact = (req, res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`});
}

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact}
