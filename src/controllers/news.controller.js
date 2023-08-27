import { createService, findAllService } from '../services/news.service.js'
import mongoose from 'mongoose'

const create = async (req, res) => {
    try {
        const {
            title,
            text,
        } = req.body

        if (!title || !text) {
            res.status(400).send({
                message: "submit all fields"
            })
        }

        const news = await createService({
        	title,
        	text,
        	user: { _id: "64ea1239d9d4ad11d8976c48"},
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
                text,
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
        const news = await findAllService()
        if (news.length === 0) {
            res.status(400).send({
                message: "nenhuma news cadastrada"
            })
        }
        res.send(news)
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}

export {
    create,
    findAll,
}