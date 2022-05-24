// The mongodb atlas instance is located in the backend folder inside
// its own config folder to clearly seperate from mvc structure
const mongoose = require('mongoose')

// Connects to the database using MONGO_URI key hidden in .env local 
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

