const User = require('../../models/user')
const {HttpError} = require('../../helpers')
// const { Unauthorized } = require("http-errors");

const logout = async (req, res, next) => {
    const {_id: id} = req.user
    
    const user = await User.findById(id)
    console.log(user.token)
    if (!user || !user.token) {
        // throw new Unauthorized("Not authorized");
        next(HttpError(401))
        // throw HttpError(401, "Not authorized")
    }
    await User.findByIdAndUpdate(id, {token: ''})

    res.status(204).json()
}

module.exports = logout