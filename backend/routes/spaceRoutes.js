// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

// Import following functions from spaceContoller
const{ getSpaces, createSpace, updateSpace, deleteSpace } = require('../controllers/spaceController')

// Call middleware
const {protect} = require('../middleware/authMiddleware')
const { logger } = require('../middleware/loggingMiddleware')

// Create GET api route to display a users spaces
router.get('/spaces', protect, logger, getSpaces)

// Create POST api route to create a space 
router.post('/spaces', protect, logger, createSpace)

// Create PUT api route to edit a space 
router.put('/spaces/:id', protect, logger, updateSpace)

// Create DELETE api route to delete a space 
router.delete('/spaces/:id', protect, logger, deleteSpace)

// Export the router
module.exports = router 