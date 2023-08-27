import { Router } from 'express'
import { create, findAll } from '../controllers/news.controller.js'
import middlewares from '../middlewares/global.middlewares.js'

const newsRouter = Router()

newsRouter.post('/', create)
newsRouter.get('/', findAll)

export default newsRouter