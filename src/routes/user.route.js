const route = require('express').Router()
const userControlerr = require('../controllers/user.controller')

route.post('/', userControlerr.create)
route.get('/', userControlerr.findAllController)
route.get('/:id', userControlerr.findByIdController)
route.patch('/:id', userControlerr.updateController)

module.exports = route
module.exports = route
