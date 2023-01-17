const { Schema, model } = require("mongoose")
const handleMongooseError = require('../helpers/handleMongooseError')

const subscriptionType = ["starter", "pro", "business"]

const userSchema = new Schema({
        password: {
          type: String,
          required: [true, 'Password is required'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: subscriptionType,
          default: "starter"
        },
        token: {
          type: String,
          default: null,
        },
}, { versionKey: false, timestamps: true })

userSchema.post('save', handleMongooseError)

const User = model('user', userSchema)

module.exports = User;