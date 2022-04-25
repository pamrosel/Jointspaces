const express = require('express')
const router = express.Router()
const { 
    registerUser, 
    loginUser,
    getUserData
} = require('../controllers/userController')

// Can pass as second argument to protect route 
const{protect} = require('../middleware/authMiddleware')

router.post('/users', registerUser)
router.post('/users/login', loginUser)
router.get('/users/me', protect, getUserData)


module.exports = router 