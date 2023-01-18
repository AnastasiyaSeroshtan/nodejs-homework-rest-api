const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')
const User = require('../../models/user')

const avatarsDir = path.join(__dirname, '../../', "public", "avatars")
const tempDir = path.join(__dirname, '../../', "temp")

const updateAvatar = async (req, res) => {
    const {path: tempPath, originalname} = req.file
    console.log(tempDir)
    console.log(originalname)

    const {_id: id} = req.user
    const filename = `${id}_${originalname}`
    const resultPath = path.join(avatarsDir, filename)

    await Jimp.read(tempPath)
        .then(avatar => {
            avatar.resize(250, 250).writeAsync('tempPath')
        .catch(error =>{
            console.log(error)
        })
        })
    
    // resize(250, 250).write('avatarSmall.jpg')
    

    await fs.rename(tempPath, resultPath)
    const avatarURL = path.join("avatars", filename)
    await User.findByIdAndUpdate(id, {avatarURL})

    res.status(200). json({
        avatarURL
    })
}

module.exports = updateAvatar