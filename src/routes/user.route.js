import express from 'express'
import userControlerr from '../controllers/user.controller.js'
import middlewares from '../middlewares/global.middlewares.js'

const router = express.Router()

router.post('/', userControlerr.create)
router.get('/', userControlerr.findAllController)
router.get('/:id', middlewares.validId, middlewares.validUser, userControlerr.findByIdController)
router.patch('/:id', middlewares.validId, middlewares.validUser, userControlerr.updateController)
export default router