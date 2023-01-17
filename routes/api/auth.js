const express = require('express')
// const ctrl = require('../../controllers/auth')
const {auth: authCtrl} = require('../../controllers')
const router = express.Router()
const {ctrlWrapper} = require('../../helpers')
const { validateBody, authenticate} = require('../../middlewares')
const schemas = require('../../schemas/users')

router.post('/signup', validateBody(schemas.signupSchema), ctrlWrapper(authCtrl.signup))

router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(authCtrl.login))

router.post('/logout', authenticate, ctrlWrapper(authCtrl.logout))

router.post('/current', authenticate, ctrlWrapper(authCtrl.getCurrent))

module.exports = router;