const express = require('express')
const userRoute = require('./src/routes/user.route')
const app = express()
const connectDatabase = require('./src/database/db')
const port = 5000

connectDatabase()

app.use(express.json())
app.use('/user', userRoute)


app.listen(5000, () => console.log('servidor rodando na porta '+port))