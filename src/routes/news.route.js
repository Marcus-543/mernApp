import { Router } from 'express'
import { validId } from '../middlewares/global.middlewares.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import {
    create,
    findAll,
    topNews,
    findById,
    searchByTitle,
    byUser,
    update,
    erase
} from '../controllers/news.controller.js'

const newsRouter = Router()

newsRouter.post('/', authMiddleware, create)
newsRouter.get('/', findAll)
newsRouter.get('/top', topNews)
newsRouter.get('/search', searchByTitle)
newsRouter.get('/byUser', authMiddleware, byUser)
newsRouter.get('/:id', authMiddleware, findById)
newsRouter.patch('/:id', authMiddleware, update)
newsRouter.delete('/:id', authMiddleware, erase)

export default newsRouter