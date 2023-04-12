const mongoose = require("mongoose")
require('dotenv').config();
const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO_CONNECT)
    console.log("Database connected")
} catch {
    console.log("Problems with the database")
}
}

module.exports = {connect}