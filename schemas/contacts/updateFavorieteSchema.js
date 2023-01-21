const Joi = require('joi')

const updateFavorieteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

module.exports = updateFavorieteSchema