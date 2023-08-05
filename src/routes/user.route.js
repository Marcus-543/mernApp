const route = require('express').Router()
const userControlerr = require('../controllers/user.controller')

route.post('/', userControlerr.create)

module.exports = route
