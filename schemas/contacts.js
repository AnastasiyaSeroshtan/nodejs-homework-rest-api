const Joi = require('joi')

const addNewContactSchema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(3).max(30).required(),
    favorite: Joi.boolean(),
})

const updateFavorieteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

module.exports = {
    addNewContactSchema,
    updateFavorieteSchema,
}