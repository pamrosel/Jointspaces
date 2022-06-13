const path = require('path') 
// Call cors
const cors = require('cors')
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

// Connect to the database
connectDB()

// Initialize express 
const server = express()

// Cors whitelist origins
server.use(cors
    (
        { origin: [...process.env.CORS_ORIGIN.split(", ")], }
    ))

server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Link up users controller, prefixing route url with /api
server.use('/api', require('./routes/userRoutes'))

// Link up spaces controller, prefixing route url with /api
server.use('/api', require('./routes/spaceRoutes'))

// Link up Bookings controller, prefixing route url with /api
server.use('/api', require('./routes/bookingRoutes'))

// Link up Requests controller, prefixing route url with /api
server.use('/api', require('./routes/requestRoutes'))

// Link up Logs controller, prefixing route url with /api
server.use('/api', require('./routes/logRoutes'))

// Serve Frontend 
if(process.env.NODE_ENV === 'production'){
    console.log('in production')
    server.use(express.static(path.join(__dirname, '../frontend/build')))
    
    server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    server.get('/', (req, res) => res.send('Please set to production'))
}

// Call error handling middleware
server.use(errorHandler)

// Call rate limiting middleware
server.use(limiter)
server.use(sessionLimiter)

// Listen to the port 
server.listen(port, () => console.log(`Server started on port ${port}`))