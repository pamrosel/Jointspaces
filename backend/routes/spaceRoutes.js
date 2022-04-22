// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

const{ getSpaces, createSpace, updateSpace, deleteSpace } = require('../controllers/spaceController')

router.get('/spaces', getSpaces)
router.post('/spaces', createSpace)
router.put('/spaces/:id', updateSpace)
router.delete('/spaces/:id', deleteSpace)

module.exports = router 