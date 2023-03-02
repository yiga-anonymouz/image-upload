const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    name: String,
    caption: String,
    image: {
        data: Buffer,
        contentType: String
    }
})

const image = new mongoose.model('image', imageSchema)

module.exports = image