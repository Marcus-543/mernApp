const route = require('express').Router()
const userControlerr = require('../controllers/user.controller')

route.post('/', userControlerr.create)
route.get('/', userControlerr.findAllController)

module.exports = route
