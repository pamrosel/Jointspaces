const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // References User Model to associate with a Booking 
        ref: 'User'
    },
    spaceid: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add a spaceid'],
        ref: 'Space'
    },
    bookingstart: {
        type: Date,
        required: true
    },
    bookingend: {
        type: Date,
        required: true
    }
}, 
    {
    timestamps: true,
    }
)

bookingSchema.index({ spaceid: 1, bookingstart: 1}, {unique: true, dropDups: true})

module.exports = mongoose.model('Booking', bookingSchema)