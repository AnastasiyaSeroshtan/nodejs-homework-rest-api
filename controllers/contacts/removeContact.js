const contacts = require('../../models/contacts')
const { HttpError } = require('../../helpers')

const removeContact = async (req, res, next) => {
      const id = req.params.contactId;
      const remoteContact = await contacts.removeContact(id);
  
      if (!remoteContact) {
        throw HttpError(404, 'Not found')
      }
  
      res.json({"message": "contact deleted"})
}

module.exports = removeContact;