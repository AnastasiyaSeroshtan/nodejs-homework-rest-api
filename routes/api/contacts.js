const express = require('express')
const ctrl = require("../../controllers/contacts")
const {ctrlWrapper} = require('../../helpers')
const { validateBody } = require('../../middlewares')
const schemas = require('../../schemas/contacts')
const router = express.Router()

router.get('/', ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getContactById))

router.post('/', validateBody(schemas.addNewContactSchema),  ctrlWrapper(ctrl.addContact))

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))

router.put('/:contactId', validateBody(schemas.addNewContactSchema), ctrlWrapper(ctrl.updateContact))

module.exports = router
