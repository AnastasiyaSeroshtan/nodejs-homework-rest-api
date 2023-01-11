const contacts = require('../../models/contacts')
const { HttpError } = require('../../helpers')

const getContactById = async (req, res, next) => {
    const id = req.params.contactId;
    console.log(id);
    const contactById = await contacts.getContactById(id);

    if (!contactById) {
      throw HttpError(404, 'Not found')
    };

    res.json(contactById)
  }

module.exports = getContactById