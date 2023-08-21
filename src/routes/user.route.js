import {Router} from 'express'
import userControlerr from '../controllers/user.controller.js'
import middlewares from '../middlewares/global.middlewares.js'

const userRouter = Router()

userRouter.post('/', userControlerr.createController)
userRouter.get('/', userControlerr.findAllController)
userRouter.get('/:id', middlewares.validId, middlewares.validUser, userControlerr.findByIdController)
userRouter.patch('/:id', middlewares.validId, middlewares.validUser, userControlerr.updateController)

export default userRouter