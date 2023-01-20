const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')
const User = require('../../models/user')

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const {path: tempPath, originalname} = req.file
    const {_id: id} = req.user
    const filename = `${id}_${originalname}`
    const resultPath = path.join(avatarsDir, filename)

    await Jimp.read(tempPath)
    .then((img) => {
       return img.resize(250, 250).writeAsync(tempPath);
    })
    .catch(error =>{
       console.log(error)
    })

    await fs.rename(tempPath, resultPath);
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(id, {avatarURL})

    res.status(200). json({
        avatarURL
    })
  };

  module.exports = updateAvatar