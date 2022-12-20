const express = require('express')
const contacts = require('../../models/contacts')
const { HttpError } = require('../../helpers')

const router = express.Router()

router.get('/', async (req, res, next) => {
try {
  const allContatcts = await contacts.listContacts();
  res.json(allContatcts)
  } 
  catch (error) {
    next(error)
  // res.status(500).json({
  //   message: 'Server error'
  // })
}
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const id = req.params.contactId;
    console.log(id);
    const contactById = await contacts.getContactById(id);

    if (!contactById) {
      throw HttpError(404, 'Not found')
      // const error = new Error('Not found');
      // error.status = 404;
      // throw error;

      // return res.status(404).json({
      //   message: 'Not found'
      // })
    };

    res.json(contactById)
    } 
    catch (error) {
      next(error)
      // const {status = 500, message = 'Server error'} = error;
      // res.status(status).json({
      //   message,
      // })
  }
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
