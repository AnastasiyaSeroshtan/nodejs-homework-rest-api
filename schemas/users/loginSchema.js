const Joi = require('Joi')

const loginSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),  
})

module.exports = loginSchema