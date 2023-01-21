const Joi = require('Joi')

const subscriptionType = ["starter", "pro", "business"]

const signupSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    subscription: Joi.string().valid(...subscriptionType),
})

module.exports = signupSchema