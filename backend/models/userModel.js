const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true
    }, 
    email: {
        type: String,
        required: [true, 'Please add a email'], 
        unique: true
    }, 
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    role: {
        type: String,
        required: [true, 'Please add a user role']
    },
    blocked: {
        type: Boolean,
        required: [true, 'Is the user blocked']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)


