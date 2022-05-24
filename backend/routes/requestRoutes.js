// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

// Import following functions from requestContoller
const{ getRequests, createRequest, deleteRequest } = require('../controllers/requestController')

// Call middleware
const { protect } = require('../middleware/authMiddleware')
const { logger } = require('../middleware/loggingMiddleware')

// Create GET api route to display a users requests
router.get('/requests', protect, logger, getRequests)

// Create POST api route to create a request 
router.post('/requests', protect, logger, createRequest)

// Create DELETE api route to delete a request 
router.delete('/requests/:id', protect, logger, deleteRequest)

// Export the router
module.exports = router 

