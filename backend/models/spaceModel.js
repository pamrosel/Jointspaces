const mongoose = require('mongoose')
const spaceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // References User Model to associate with a Space 
        ref: 'User'
    },
    spacename: {
        type: String,
        required: [true, 'Please add a space name'],
        maxlength: [40, 'Spacename cannot be more than 40 chars']
    },
    description: {
        type: String,
        required: [true, 'Please add a space description'],
        maxlength: [1000, 'Description cannot be more than 1000 characters']
    }, 
    rules: {
        type: String,
        required: false,
        maxlength: [1000, 'Rules cannot be more than 1000 characters']
    }, 
    address: {
        type: String,
        required: [true, 'Please add an address'],
        maxlength: [150, 'Address cannot be more than 150 characters']
    },
    suburb: {
        type: String, 
        required: [true, 'Please add a suburb'],
        maxlength: [100, 'Address cannot be more than 100 characters']
    },
    capacity: {
        type: Number,
        required: [true, 'Please add a capacity'],
    },
    spacetype: {
        type: String,
        enum: ['single', 'multi'],
        default: 'single',
        required: [true, 'Please choose a space type'],
    },
    spaceusers: [{
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        required: false
    }]
}, 
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('Space', spaceSchema)