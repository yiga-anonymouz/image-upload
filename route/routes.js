const Controller = require('../controller/controller')
const express = require('express')
const Router = express.Router()

Router.get('/', Controller.index_route)

Router.post('/', Controller.image_post)

module.exports = Router