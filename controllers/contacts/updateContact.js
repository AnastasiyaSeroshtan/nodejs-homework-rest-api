const { HttpError } = require('../../helpers')
const contacts = require('../../models/contacts')

const updateContact = async (req, res, next) => {
  const id = req.params.contactId
  const updatedContact = await contacts.updateContact(id, req.body);
  
  if (!updatedContact) {
    throw HttpError(404, "Not found")
  }
  
  res.json(updatedContact)
}

module.exports = updateContact;