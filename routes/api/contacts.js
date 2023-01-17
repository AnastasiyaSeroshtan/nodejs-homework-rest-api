const express = require('express')
const ctrl = require("../../controllers/contacts")
const {ctrlWrapper} = require('../../helpers')
const { validateBody, isValidId, validateBodyForFavorite, authenticate } = require('../../middlewares')
const schemas = require('../../schemas/contacts')
const router = express.Router()

router.get('/', authenticate, ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.getContactById))

router.post('/', authenticate, validateBody(schemas.addNewContactSchema),  ctrlWrapper(ctrl.addContact))

router.delete('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.removeContact))

router.put('/:contactId', authenticate, isValidId, validateBody(schemas.addNewContactSchema), ctrlWrapper(ctrl.updateContact))

router.patch('/:contactId/favorite', authenticate, isValidId, validateBodyForFavorite(schemas.updateFavorieteSchema), ctrlWrapper(ctrl.updateStatusContact))

module.exports = router
