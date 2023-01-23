const Joi = require('Joi')

const emailSchema = Joi.object({
    email: Joi.string().email().required(),  
})

module.exports = emailSchema