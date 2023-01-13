const Contact = require('../../models/contact')
const { HttpError } = require('../../helpers')

const removeContact = async (req, res, next) => {
      const id = req.params.contactId;
      const remoteContact = await Contact.findByIdAndRemove(id);
  
      if (!remoteContact) {
        throw HttpError(404, 'Not found')
      }
  
      res.json({"message": "contact deleted"})
}

module.exports = removeContact;