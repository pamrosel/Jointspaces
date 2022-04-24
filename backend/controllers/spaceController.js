// Call express-async-handler to wrap async/await try/catch functionality 
const asyncHandler = require('express-async-handler')
const Space = require('../models/spaceModel')

// @desc    Get spaces
// @route   GET /api/spaces
// @access  Private

const getSpaces = asyncHandler (async (req, res) => {
    const spaces = await Space.find()

    res.status(200).json(spaces)
})

// @desc    Create space
// @route   POST /api/spaces
// @access  Private

const createSpace = asyncHandler (async (req, res) => {
    if(!req.body.text) {
        res.status(400).json
        throw new Error('Please add a text field')
    }

    const space = await Space.create({
        text: req.body.text
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

    await Space.remove()

    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getSpaces,
    createSpace,
    updateSpace,
    deleteSpace,
}