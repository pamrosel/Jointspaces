const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connection: ${connect.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        // exit process as failure = 1
        process.exit(1)
    }
}

module.exports = connectDB