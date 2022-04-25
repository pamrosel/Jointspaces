const mongoose = require('mongoose')
const bookingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // References User Model to associate with a Booking 
        ref: 'User'
    },
    spacename: {
        type: String,
        required: [true, 'Please add a spacename'],
        maxlength: [40, 'Spacename cannot be more than 40 chars']
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

module.exports = mongoose.model('Booking', bookingSchema)