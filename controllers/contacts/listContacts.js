const Contact = require('../../models/contact')

const listContacts = async (req, res, next) => {
  const {_id: owner} = req.user
  const {page = 1, limit = 20} = req.query
  const skip = (page - 1)*limit
  const allContatcts = await Contact.find({owner}, '-createdAt -updatedAt', {skip, limit});
  res.json(allContatcts)
};

module.exports = listContacts;