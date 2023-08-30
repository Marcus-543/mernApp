import { Router } from 'express'
import { create, findAll, topNews } from '../controllers/news.controller.js'
import { validId } from '../middlewares/global.middlewares.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const newsRouter = Router()

newsRouter.post('/', authMiddleware , create)
newsRouter.get('/', findAll)
newsRouter.get('/top', topNews)

export default newsRouter