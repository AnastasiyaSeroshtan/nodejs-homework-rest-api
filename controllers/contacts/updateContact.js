const Contact = require('../../models/contact')
const { HttpError } = require('../../helpers')

const updateContact = async (req, res, next) => {
  const id = req.params.contactId
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {new:true});
  
  if (!updatedContact) {
    throw HttpError(404, "Not found")
  }
  
  res.json(updatedContact)
}

module.exports = updateContact;