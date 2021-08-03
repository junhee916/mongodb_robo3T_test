require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const static = require('serve-static')

const userRouter = require('./router/user')

const connectDB = require('./config/database')
connectDB()

// connected html 
app.use('/', static(path.join(__dirname, 'html')))

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(morgan('dev'))

// connected router
app.use('/user', userRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))