const User = require('../../models/user')
const {HttpError} = require('../../helpers')

const logout = async (req, res, next) => {
    const {_id: id} = req.user
    const user = await User.findById(id)
    console.log(user.token)
    if (!user || !user.token) {
        next(HttpError(401, "Not authorized"))
    }
    await User.findByIdAndUpdate(id, {token: ''})

    res.status(204).json()
}

module.exports = logout