const Joi = require('joi')

const addNewContactSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.number().required()
})

module.exports = {
    addNewContactSchema,
}