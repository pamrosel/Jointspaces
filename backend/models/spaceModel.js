const mongoose = require('mongoose')
const spaceSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add text value']
    }
}, 
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('Space', spaceSchema)