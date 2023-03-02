const image = require('../models/imageModel')
const fs = require('fs')
const path = require('path')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname} - ${Date.now()}`)
    }
})

const upload = multer({storage: storage})

const index_route = (req, res) => {
    image.find( {}, (err, image) => {
        if(err) {
            console.log(err)
        }else{
            res.render('index' , {image: image})
        }
    })
}

const image_post = (upload.single('image'), (req , res, next)  => {
    console.log(req.body.name)
    console.log(req.files)
    const deets = {
        name: req.body.name,
        caption: req.body.caption,
        image: {
            data: fs.readFileSync(path.join(`${__dirname}/uploads/${req.file.filename}`)),
            contentType:'image/png'
        }
    }
    image.create(deets, (err, image) => {
        if(err){
            console.log(err)
        }else{
            image.save()
            res.redirect('/')
        }
    })
})


module.exports = {
    index_route,
    image_post
}