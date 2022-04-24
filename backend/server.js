// Call express framework 
const express = require('express')
const colors = require('colors')
// dotenv environment variables calling .config
const dotenv = require('dotenv').config()
// Call error middleware for development mode 
const { errorHandler } = require('./middleware/errorMiddleware')
// Call mongo atlas database 
const connectDB = require('./config/db')
// Server running on port 5000 
const port = process.env.PORT || 5000

connectDB()

// Initialize express 
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Link up spaces controller 
server.use('/api', require('./routes/spaceRoutes'))

server.use(errorHandler)

server.listen(port, () => console.log(`Server started on port ${port}`))