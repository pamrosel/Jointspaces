// Logging Feature
const Logs = require('../models/logsModel')

const logger = async (req, res, next) => {

    const log = await Logs.create({
        email: req.user.email,
        name: req.user.name,
        session: req.headers.authorization.split(' ')[1],
        userIP: req.ip,
        reqMethod: req.method,
        reqPath: req.path,
        reqTime: new Date(),
    })

    console.log(req.user.name)
    console.log(req.user.email)
    console.log(req.headers.authorization)
    console.log(req.ip)

    res.status(201)

    next()
}

module.exports = { logger }

