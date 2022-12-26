const contacts = require('../../models/contacts')

const addContact = async (req, res, next) => { 
    const newContact = await contacts.addContact(req.body);
  
    res.status(201).json(newContact)
}

 module.exports = addContact; 