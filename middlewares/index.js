const validateBody = require('./validateBody');
const isValidId = require('./isValisId');
const validateBodyForFavorite = require('./validateBodyForFavorite')
const authenticate = require('./authenticate')
const upload = require('./upload')

module.exports = {
    validateBody,
    isValidId,
    validateBodyForFavorite,
    authenticate,
    upload,
}