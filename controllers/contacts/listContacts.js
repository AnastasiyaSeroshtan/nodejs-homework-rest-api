const Contact = require('../../models/contact')

const listContacts = async (req, res, next) => {
  const allContatcts = await Contact.find({}, '-createdAt -updatedAt');
  res.json(allContatcts)
};

module.exports = listContacts;