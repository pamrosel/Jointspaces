// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

const{ getSpaces, createSpace, updateSpace, deleteSpace } = require('../controllers/spaceController')

const {protect} = require('../middleware/authMiddleware')

router.get('/spaces', protect, getSpaces)
router.post('/spaces', protect, createSpace)
router.put('/spaces/:id', protect, updateSpace)
router.delete('/spaces/:id', protect, deleteSpace)

module.exports = router 