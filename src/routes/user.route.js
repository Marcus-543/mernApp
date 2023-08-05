const route = require('express').Router()
const userControlerr = require('../controllers/user.controller')

route.get('/', userControlerr.soma)

module.exports = route
