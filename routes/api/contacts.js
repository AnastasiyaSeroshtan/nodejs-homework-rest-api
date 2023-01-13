const express = require('express')
const ctrl = require("../../controllers/contacts")
const {ctrlWrapper} = require('../../helpers')
const { validateBody, isValidId, validateBodyForFavorite } = require('../../middlewares')
const schemas = require('../../schemas/contacts')
const router = express.Router()

router.get('/', ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', isValidId, ctrlWrapper(ctrl.getContactById))

router.post('/', validateBody(schemas.addNewContactSchema),  ctrlWrapper(ctrl.addContact))

router.delete('/:contactId', isValidId, ctrlWrapper(ctrl.removeContact))

router.put('/:contactId', isValidId, validateBody(schemas.addNewContactSchema), ctrlWrapper(ctrl.updateContact))

router.patch('/:contactId/favorite', isValidId, validateBodyForFavorite(schemas.updateFavorieteSchema), ctrlWrapper(ctrl.updateStatusContact))

module.exports = router
