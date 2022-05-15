// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

// Import following functions from bookingContoller
const{ getBookings, createBooking, deleteBooking, getBookingsbyid } = require('../controllers/bookingController')

// Call middleware
const { protect } = require('../middleware/authMiddleware')
const { logger } = require('../middleware/loggingMiddleware')

// Create GET api route to display a users bookings
router.get('/bookings', protect, logger, getBookings)

// Create POST api route to create a booking 
router.post('/bookings', protect, logger, createBooking)

// Create DELETE api route to delete a booking 
router.delete('/bookings/:id', protect, logger, deleteBooking)

// Create GET api route get bookings by id
router.get('/bookings/:id', getBookingsbyid)


// Export the router
module.exports = router 

