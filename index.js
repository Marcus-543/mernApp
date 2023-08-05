const express = require('express')
const userRoute = require('./src/routes/user.route')
const app = express()
const port = 5000

app.use(express.json())
app.use('/user', userRoute)


app.listen(5000, () => console.log('servidor rodando na porta '+port))