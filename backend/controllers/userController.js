const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user 
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role, blocked } = req.body
    
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists 
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        // console.log('register user exists')
        throw new Error('User already exists')
    }

    // Hash password with bcrypt 10 rounds
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user 
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role, 
        blocked,
    })

    // Check user created
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name, 
            email: user.email,
            role: user.role,
            blocked: user.blocked,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
    
    })

    // @desc    Register an admin user
    // @route   POST /api/users/admin
    // @access  Public
    const registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, password, role, blocked } = req.body
    
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists 
    const userExists = await User.findOne({email})

    if(userExists) {
        // console.log('registeradmin user exists')
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password with bcrypt 10 rounds
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create admin 
    const admin = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        blocked
    })

    // Check admin created
    if(admin) {
        // console.log('you created an admin!')
        // res.status(201).json({message: 'you created a admin!'})
        res.status(201).json({
            _id: admin.id,
            name: admin.name, 
            email: admin.email,
            role: admin.role,
            blocked: admin.blocked,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
    
    })

    // @desc    Authenticate a user
    // @route   POST /api/users/login
    // @access  Public
    const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    // Check for user email
    const user = await User.findOne({email})

    // Check password using bcrypt compare against hashed password 
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc    Get current logged in user data 
// @route   GET /api/users/me
// @access  Private
const getUserData = asyncHandler(async(req, res) => {
    
    res.status(200).json(req.user)
})

// @desc    GET all users 
// @route   GET /api/allusers
// @access  Public
const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({ role: 'user' })
    res.status(200).json(users)
})

// @desc    GET all admin users 
// @route   GET /api/alladmin
// @access  Public
const getAdmin = asyncHandler(async(req, res) => {
    const users = await User.find({ role: 'admin' })
    res.status(200).json(users)
})


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

// @desc    Delete user
// @route   DELETE /api/allusers/:id
// @access  

const deleteUser = asyncHandler (async (req, res) => {
    const usertodelete = await User.findById(req.params.id)

    // Cannot find a user with ID
    if(!usertodelete) {
        res.status(404).json({ message: 'no user to delete' })
        throw new Error ('User to delete not found')
        // console.log('user to delete not found')
    }

    //Can find a user with ID
    usertodelete.remove()
    res.status(200).json({ id: req.params.id })
    // console.log( 'user'+ req.params.id +'was deleted')

})

// @desc    GET User by ID
// @route   GET /api/allusers/:id
// @access  admin

const getUser = asyncHandler (async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
})

// @desc    Update User
// @route   PUT /api/allusers/:id
// @access  admin

const updateUser = asyncHandler (async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error ('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, })
    res.status(200).json(updatedUser)
})

module.exports = { 
    registerUser,
    loginUser,
    getUserData,
    getUsers, 
    registerAdmin, 
    deleteUser,
    getUser,
    getAdmin,
    updateUser,
}