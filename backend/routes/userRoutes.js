// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

// Import following functions from bookingContoller
const { 
    registerUser, 
    loginUser,
    getUserData
} = require('../controllers/userController')

// Call middleware
const { protect } = require('../middleware/authMiddleware')

// Create POST api route to register a user
router.post('/users', registerUser)

// Create POST api route to login a user
router.post('/users/login', loginUser)

// Create GET api route display user data
router.get('/users/me', protect, getUserData)

// Export the router
module.exports = router 