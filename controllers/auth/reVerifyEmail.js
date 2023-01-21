const User = require('../../models/user')
const {HttpError, sendEmail} = require('../../helpers')
const {BASE_URL} = process.env

const reVerifyEmail = async (req, res) => {
    const {email} = req.body
    const user = await User.findOne({email})

    if (!user) {
        throw HttpError(400, "User not found")
    }

    if (user.verify) {
        throw HttpError(400, "Verification has already been passed")
    }

    const verifyEmail = {
        to: email,
        subject: "Verify your email",
        html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}" target="_blank">Click verify email</a>`
};   

    await sendEmail(verifyEmail)

    res.status(200).json({
        message: "Verification email sent"
    })

}

module.exports = reVerifyEmail