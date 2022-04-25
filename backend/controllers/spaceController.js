// Call express-async-handler to wrap async/await try/catch functionality 
const asyncHandler = require('express-async-handler')
const Space = require('../models/spaceModel')
const User = require('../models/userModel')

// @desc    Get spaces
// @route   GET /api/spaces
// @access  Private

const getSpaces = asyncHandler (async (req, res) => {
    const spaces = await Space.find({ user: req.user.id })

    res.status(200).json(spaces)
})

// @desc    Create space
// @route   POST /api/spaces
// @access  Private

const createSpace = asyncHandler (async (req, res) => {
    if(!req.body.spacename) {
        res.status(400).json
        throw new Error('Please add a spacename field')
    }
    if(!req.body.description) {
        res.status(400).json
        throw new Error('Please add a description field')
    }
    if(!req.body.address) {
        res.status(400).json
        throw new Error('Please add a address field')
    }
    if(!req.body.suburb) {
        res.status(400).json
        throw new Error('Please add a suburb field')
    }
    if(!req.body.capacity) {
        res.status(400).json
        throw new Error('Please add a capacity field')
    }
    if(!req.body.spacetype) {
        res.status(400).json
        throw new Error('Please add a spacetype field')
    }

    const space = await Space.create({   
        user: req.user.id,
        spacename: req.body.spacename,
        description: req.body.description,
        rules: req.body.rules,
        address: req.body.address,
        suburb: req.body.suburb,
        capacity: req.body.capacity,
        spacetype: req.body.spacetype,
        spaceusers: req.body.spaceusers,
    })
    res.status(200).json(space)
})

// @desc    Update space
// @route   PUT /api/spaces/:id
// @access  Private

const updateSpace = asyncHandler (async (req, res) => {
    const space = await Space.findById(req.params.id)

    if(!space) {
        res.status(400)
        throw new Error ('Space not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the space user 
    if(space.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedSpace = await Space.findByIdAndUpdate(req.params.id, req.body, { new: true, })

    res.status(200).json(updatedSpace)
})

// @desc    Delete space
// @route   DELETE /api/spaces/:id
// @access  Private

const deleteSpace = asyncHandler (async (req, res) => {
    const space = await Space.findById(req.params.id)

    if(!space) {
        res.status(400)
        throw new Error ('Space not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the space user 
    if(space.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await Space.remove()

    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getSpaces,
    createSpace,
    updateSpace,
    deleteSpace,
}