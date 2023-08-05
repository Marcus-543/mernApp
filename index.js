const express = require('express')
const app = express()

app.get('/', (req, res) => {
	const soma = 1+1
	res.send({
		soma: soma,
	})
})


app.listen(5000, () => {
	console.log("servidor rodando")
})