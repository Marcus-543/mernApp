import { loginService } from '../services/auth.service.js'
import bcrypt from 'bcrypt'

const loginController = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        
        const user = await loginService(email)

        if (!user) {
        	return res.status(400).send({ message: "invalid credentials" })
        }else{
        	const passwordIsValid = bcrypt.compareSync(password, user.password)
        	if (!passwordIsValid) {
        		return res.status(400).send({ message: "invalid credentials" })
        	}
        }

        res.send("login ok")

    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}

export { loginController }