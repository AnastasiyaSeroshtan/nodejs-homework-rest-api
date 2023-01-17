const express = require('express')
const ctrl = require('../../controllers/auth')
const router = express.Router()
const {ctrlWrapper} = require('../../helpers')
const { validateBody, authenticate} = require('../../middlewares')
const schemas = require('../../schemas/users')

router.post('/signup', validateBody(schemas.signupSchema), ctrlWrapper(ctrl.signup))

router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))

router.post('/logout', authenticate, ctrlWrapper(ctrl.logout))

router.post('/current', authenticate, ctrlWrapper(ctrl.getCurrent))

module.exports = router;