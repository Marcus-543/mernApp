const UserService = require('../services/user.service')
const mongoose = require('mongoose')
const create = async (req, res) => {
    try {
        const {
            name,
            username,
            email,
            password
        } = req.body
        if (!name || !username || !email || !password) {
            res.status(400).send({
                message: "submit all fields"
            })
        }
        const user = await UserService.create(req.body)
        if (!user) {
            return res.status(400).send({
                message: "Error creating user"
            })
        }
        res.status(201).send({
            message: "user created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
            }
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}
const findAllController = async (req, res) => {
    try {
        const users = await UserService.findAllService()
        if (users.length === 0) {
            res.status(400).send({
                message: "nenhum usuario cadastrad"
            })
        }
        res.send(users)
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}
const findByIdController = async (req, res) => {
    try {
        const user = req.user
        res.send(user)
    } catch {
        res.status(500).send({
            message: err.message
        })
    }
}
const updateController = async (req, res) => {
    try {
        const {
            name,
            username,
            email,
            password
        } = req.body
        if (!name && !username && !email && !password) {
            res.status(400).send({
                message: 'submit at least one fields for update'
            })
        }
        const {
            id,
            user
        } = req
        await UserService.updateService(id, name, username, email, password, )
        res.send({
            message: "user update successfully"
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}
module.exports = {
    create,
    findAllController,
    findByIdController,
    updateController,
}