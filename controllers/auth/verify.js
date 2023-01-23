const User = require('../../models/user')
const {HttpError} = require('../../helpers')

const verify = async (req, res, next) => {
    // console.log("Hello")
    const {verificationToken} = req.params
    // console.log(verificationToken)
    const user = await User.findOne({verificationToken})
    const {_id: id} = user
    // console.log(user)

    if (!user){
        throw HttpError(430, 'User not found')
    }

    await User.findByIdAndUpdate(id, {verify: true, verificationToken: null})

    res.status(200).json({
        message: 'Verification successful'
    })
}

module.exports = verify