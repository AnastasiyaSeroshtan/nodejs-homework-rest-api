const jwt = require('jsonwebtoken')
const User = require('../models/user')
const {SECRET_KEY} = process.env
require("dotenv").config();

const authenticate = async (req, res, next) => {

    try {
        const {authorization = ""} = req.headers
        const [bearer, token] = authorization.split(' ')
    
        if (bearer !== "Bearer") {
            res.status(401).json("Not authorized") 
        }
        const {id} = jwt.verify(token, SECRET_KEY)
        const user = await User.findById(id)

        if (!user || !user.token) {
            res.status(401).json("Not authorized") 
        }
        req.user = user
        next()
    } catch {
        res.status(401).json("Not authorized")
    }
}

module.exports = authenticate;