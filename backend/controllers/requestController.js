// Call express-async-handler to wrap async/await try/catch functionality 
const asyncHandler = require('express-async-handler')
const Request = require('../models/requestModel')
const User = require('../models/userModel')

// @desc    Get requests
// @route   GET /api/requests
// @access  Private

const getRequests = asyncHandler (async (req, res) => {
    const requests = await Request.find({ user: req.user.id })

    res.status(200).json(requests)
})

// @desc    Create request
// @route   POST /api/requests
// @access  Private

const createRequest = asyncHandler (async (req, res) => {
    if(!req.body.user) {
        res.status(400).json
        throw new Error('Please add a user')
    }

    if(!req.body.spaceid) {
        res.status(400).json
        throw new Error('Please add a space id')
    }

    const request = await Request.create({
        user: req.user.id,
        spaceid: req.body.spaceid
    })
    res.status(200).json(request)
})

// @desc    Delete space
// @route   DELETE /api/requests/:id
// @access  Private

const deleteRequest = asyncHandler (async (req, res) => {
    const request = await Request.findById(req.params.id)

    if(!request) {
        res.status(400)
        throw new Error ('Request not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the request user 
    if(request.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await Request.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getRequests,
    createRequest,
    deleteRequest,
}