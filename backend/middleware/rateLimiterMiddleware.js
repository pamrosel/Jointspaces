const express = require('express')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 1000, // 1000 milliseconds = 1s
    max: 1000, // Limit each IP to 1000 requests per 1 second 'window'
    standardHeaders: true, // Return 'RateLimit-*' headers
    message: "Too many requests, please try again later"
})

const sessionLimiter = rateLimit({
    // Millisecond * Second * Minute * Hour = Day 
    windowMs: (1000 * 60 * 60) * 24, // 24h
    max: 1000, // max 1000 requests per session
    standardHeaders: true, // Return 'RateLimit-*' headers
    message: "Reached session limit per day"
})

module.exports = { 
    limiter, 
    sessionLimiter 
}

