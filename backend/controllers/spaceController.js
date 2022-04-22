// Call express-async-handler to wrap async/await try/catch functionality 
const asyncHandler = require('express-async-handler')

// @desc    Get spaces
// @route   GET /api/spaces
// @access  Private

const getSpaces = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Get spaces'})
})

// @desc    Create space
// @route   POST /api/spaces
// @access  Private

const createSpace = asyncHandler (async (req, res) => {
    console.log(req.body)
    if(!req.body.text) {
        res.status(400).json
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Create space'})
})

// @desc    Update space
// @route   PUT /api/spaces/:id
// @access  Private

const updateSpace = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update space ${req.params.id}`})
})

// @desc    Delete space
// @route   DELETE /api/spaces/:id
// @access  Private

const deleteSpace = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete space ${req.params.id}`})
})



module.exports = {
    getSpaces,
    createSpace,
    updateSpace,
    deleteSpace,
}