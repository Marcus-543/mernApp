const mongoose = require('mongoose')
const UserService = require('../services/user.service')

const validId = (req, res, next) => {
	const id = req.params.id

	if (!mongoose.Types.ObjectId.isValid(id)) {
		res.status(400).send({ message: "invalid ID" })
	}

	next()
}

const validUser = async (req, res, next) => {
	const id = req.params.id

	const user = await UserService.findByIdService(id)

	if (!user) {
		send.status(400).send({ message: "user not found" })
	}

	req.id = id
	req.user = user

	next()

}

module.exports = {  validId ,validUser }