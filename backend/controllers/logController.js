// Call express-async-handler to wrap async/await try/catch functionality 
const asyncHandler = require('express-async-handler')
const Log = require('../models/logsModel')

// @desc    Get logs
// @route   GET /api/logs
// @access  Private

const getLogs = asyncHandler (async (req, res) => {
    const logs = await Log.find().sort({reqTime:-1}).limit(50)
    res.status(200).json(logs)
})

module.exports = {
    getLogs
}