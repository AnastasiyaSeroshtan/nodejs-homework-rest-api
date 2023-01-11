const contacts = require('../../models/contacts')

const listContacts = async (req, res, next) => {
  const allContatcts = await contacts.listContacts();
  res.json(allContatcts)
};

module.exports = listContacts;