const mongoose = require("mongoose")
require("dotenv").config()

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true
    })
    console.log("mongodb connected")
  } catch (error) {
    console.error("mongodb not connected : ", error)
    process.exit(1)
  }
}

module.exports = dbconnect