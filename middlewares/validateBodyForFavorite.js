const { HttpError } = require('../helpers');

const validateBodyForFavorite = schema => {
    const func = (req, res, next) => {

        const {error} = schema.validate(req.body);
      
        if (error) {
            next(HttpError(400, (Object.keys(error._original).length === 0) ? 'missing field favorite' : error.message=error.details[0].message))
        }

        next()
    }
    return func;
}

module.exports = validateBodyForFavorite;
