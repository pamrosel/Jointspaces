// Function to overwrite the default error handler if no pre-determined
// error status, reverting to a catch-all 500 error status 
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        // Display error messaging 
        message: err.message,
        // Additional stack trace error messaging only available in development mode
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler,
}