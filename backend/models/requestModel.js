const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // References User Model to associate with a request 
        ref: 'User'
    },
    spaceid: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add a spaceid'],
        ref: 'Space'
    }
}, 
    {
    timestamps: true,
    }
)

requestSchema.index({ user: 1, spaceid: 1}, {unique: true, dropDups: true})

module.exports = mongoose.model('Request', requestSchema)