const express = require('express')
const {auth: authCtrl} = require('../../controllers')
const router = express.Router()
const {ctrlWrapper} = require('../../helpers')
const { validateBody, authenticate, upload} = require('../../middlewares')
const {users} = require('../../schemas')

router.post('/signup', validateBody(users.signupSchema), ctrlWrapper(authCtrl.signup))

router.get('/verify/:verificationToken', ctrlWrapper(authCtrl.verify))

router.post('/verify', validateBody(users.emailSchema), ctrlWrapper(authCtrl.reVerifyEmail))

router.post('/login', validateBody(users.loginSchema), ctrlWrapper(authCtrl.login))

router.post('/logout', authenticate, ctrlWrapper(authCtrl.logout))

router.post('/current', authenticate, ctrlWrapper(authCtrl.getCurrent))

router.patch('/avatars', authenticate, upload.single('avatar'), ctrlWrapper(authCtrl.updateAvatar))

module.exports = router;