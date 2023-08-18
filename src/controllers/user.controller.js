const UserService = require('../services/user.service')

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

module.exports = { create, findAllController }