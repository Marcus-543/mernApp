const route = require('express').Router()
const userControlerr = require('../controllers/user.controller')
const {validId, validUser} = require('../middlewares/global.middlewares')

route.post('/', userControlerr.create)
route.get('/', userControlerr.findAllController)
route.get('/:id', validId, validUser, userControlerr.findByIdController)
route.patch('/:id', validId, validUser, userControlerr.updateController)

module.exports = route
