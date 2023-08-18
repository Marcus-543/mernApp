const UserService = require('../services/user.service')
const mongoose = require('mongoose')

const create = async (req, res) => {
	const {name, username, email, password } = req.body

	if(!name || !username || !email || !password){
		res.status(400).send({message: "submit all fields"})
	}

	const user = await UserService.create(req.body)

	if(!user){
		return res.status(400).send({ message: "Error creating user" })
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
}

const findAllController = async (req, res) => {
	const users = await UserService.findAllService()

	if (users.length === 0) {
		res.status(400).send({ message: "nenhum usuario cadastrad" })

	}

	res.send(users)
}

const findByIdController = async (req, res) => {
	const id = req.params.id

	if (!mongoose.Types.ObjectId.isValid(id)) {
		res.status(400).send({ message: "invalid ID" })
	}

	const user = await UserService.findByIdService(id)

	if (!user) {
		send.status(400).send({ message: "user not found" })
	}

	res.send(user)

}

const updateController = async (req, res) => {
	const { name, username, email, password } = req.body

	if (!name && !username && !email && !password) {
		res.status(400).send({ message: 'submit at least one fields for update' })
	}

	const id = req.params.id

	if (!mongoose.Types.ObjectId.isValid(id)) {
		res.status(400).send({ message: "invalid ID" })
	}

	const user = await UserService.findByIdService(id)

	if (!user) {
		res.status(400).send({ message: 'user not found' })
	}

	await UserService.updateService(
		id, 
		name,
		username,
		email,
		password,
		)

	res.send({ message: "user update successfully" })

}

module.exports = { create, findAllController, findByIdController, updateController, }