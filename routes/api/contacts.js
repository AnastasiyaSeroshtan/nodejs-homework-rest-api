const express = require('express')
const {contacts: contactsCtrl} = require('../../controllers')
const {ctrlWrapper} = require('../../helpers')
const { validateBody, isValidId, validateBodyForFavorite, authenticate } = require('../../middlewares')
const {contacts} = require('../../schemas')
const router = express.Router()

router.get('/', authenticate, ctrlWrapper(contactsCtrl.listContacts))

router.get('/:contactId', authenticate, isValidId, ctrlWrapper(contactsCtrl.getContactById))

router.post('/', authenticate, validateBody(contacts.addNewContactSchema),  ctrlWrapper(contactsCtrl.addContact))

router.delete('/:contactId', authenticate, isValidId, ctrlWrapper(contactsCtrl.removeContact))

router.put('/:contactId', authenticate, isValidId, validateBody(contacts.addNewContactSchema), ctrlWrapper(contactsCtrl.updateContact))

router.patch('/:contactId/favorite', authenticate, isValidId, validateBodyForFavorite(contacts.updateFavorieteSchema), ctrlWrapper(contactsCtrl.updateStatusContact))

module.exports = router
