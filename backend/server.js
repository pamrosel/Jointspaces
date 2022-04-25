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
// Import rate limiter functions
const { limiter, sessionLimiter } = require('./middleware/rateLimiterMiddleware')

connectDB()

// Initialize express 
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Link up users controller 
server.use('/api', require('./routes/userRoutes'))

// Link up spaces controller 
server.use('/api', require('./routes/spaceRoutes'))

// Link up Bookings controller 
server.use('/api', require('./routes/bookingRoutes'))

server.use(errorHandler)

server.use(limiter)
server.use(sessionLimiter)

server.listen(port, () => console.log(`Server started on port ${port}`))