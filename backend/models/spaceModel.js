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
        maxlength: [40, 'Spacename cannot be more than 40 chars'],
        unique: true,
        index: true
    },
    description: {
        type: String,
        required: [true, 'Please add a space description'],
        maxlength: [5000, 'Description cannot be more than 5000 characters']
    }, 
    rules: {
        type: String,
        required: false,
        maxlength: [5000, 'Rules cannot be more than 5000 characters']
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
        required: [true, 'Please choose a space type']
    },
    spaceusers: [{
        type: String,
        required: [true, 'Please add spaceusers'],
        ref: 'User'
    }],
    spaceimage: {
        type: String,
        required: [true, 'Please add an image of the space'],
        maxlength: [300, 'Address cannot be more than 300 characters']
    }
}, 
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('Space', spaceSchema)