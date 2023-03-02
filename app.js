require('dotenv').config()

const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const router = require('./route/routes')
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

mongoose.connect('mongodb://127.0.0.1:27017/imageUpload', {useNewUrlParser: true})


const PORT = process.env.PORT

app.use(router)

app.listen(PORT , () => {
    console.log(`listening on port`)
})