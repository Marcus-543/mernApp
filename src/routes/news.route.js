import { Router } from 'express'
import { create, findAll, topNews, findById } from '../controllers/news.controller.js'
import { validId } from '../middlewares/global.middlewares.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const newsRouter = Router()

newsRouter.post('/', authMiddleware , create)
newsRouter.get('/', findAll)
newsRouter.get('/top', topNews)
newsRouter.get('/:id', findById)

export default newsRouter