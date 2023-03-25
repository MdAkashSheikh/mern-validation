require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
// const User = require('./model/registerSchema')
const router = require('./routes/route')

mongoose.set('debug', true)
mongoose.set('strictQuery', false)

const app =express()

const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONN)
.then(() => console.log('Database Connected.'))
.catch((err)=> console.log(err))

app.use('/api', router)

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})