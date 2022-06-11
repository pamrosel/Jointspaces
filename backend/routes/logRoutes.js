// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

// Import following functions from bookingContoller
const{ getLogs } = require('../controllers/logController')

// Create GET api route to display all logs
router.get('/logs', getLogs)


// Export the router
module.exports = router 

