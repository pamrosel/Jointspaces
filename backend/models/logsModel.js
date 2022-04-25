const mongoose = require('mongoose')

const logsSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: true,
            ref: 'User'
        },
        session: {
            type: String,
            required: true,
        },
        userIP: {
            type: String,
            required: [true, 'no user ip'],
        },
        reqMethod: {
            type: String,
            required: [true, 'no req method'],
        },
        reqPath: {
            type: String,
            required: [true, 'no req path'],
        },
        reqTime: {
            type: String,
            required: [true, 'no req time'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Logs', logsSchema)

