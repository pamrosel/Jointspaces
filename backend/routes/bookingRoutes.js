// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

const{ getBookings, createBooking, updateBooking, deleteBooking } = require('../controllers/bookingController')

const { protect } = require('../middleware/authMiddleware')
const { logger } = require('../middleware/loggingMiddleware')

router.get('/bookings', protect, logger, getBookings)
router.post('/bookings', protect, logger, createBooking)
router.put('/bookings/:id', protect, logger, updateBooking)
router.delete('/bookings/:id', protect, logger, deleteBooking)

module.exports = router 

