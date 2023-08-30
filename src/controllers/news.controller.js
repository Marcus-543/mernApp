import {
    createService,
    findAllService,
    countNews,
    topNewsService
} from '../services/news.service.js'
import mongoose from 'mongoose'
const create = async (req, res) => {
    try {
        const {
            title,
            text
        } = req.body
        if (!title || !text) {
            res.status(400).send({
                message: "submit all fields"
            })
        }
        const news = await createService({
            title,
            text,
            user: req.userId
        })
        if (!news) {
            return res.status(400).send({
                message: "Error creating news"
            })
        }
        res.status(201).send({
            message: "news created successfully",
            news: {
                id: news._id,
                title,
                text
            }
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}
const findAll = async (req, res) => {
    try {
        let {
            limit,
            offset
        } = req.query
        limit = Number(limit)
        offset = Number(offset)
        if (!limit) {
            limit = 5
        }
        if (!offset) {
            offset = 0
        }
        const news = await findAllService(limit, offset)
        const total = await countNews()
        const currentUrl = req.baseUrl
        const next = offset + limit
        const nextUrl = next < total ? '${currentUrl}?limit=${limit}&offset=${next}' : null
        const previous = offset - limit < 0 ? null : offset - limit
        const previousUrl = previous != null ? '${currentUrl}?limit=${limit}&offset=${previous}' : null
        if (news.length === 0) {
            return res.status(400).send({
                message: "nenhuma news cadastrada"
            })
        }
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username
            })),
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}

const topNews = async (req, res) => {
    try{
        const news = await topNewsService()

        if (!news) {
            res.status(400).send({ message: "There id no regitered post" })
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username 
            }
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}

export {
    create,
    findAll,
    topNews
}