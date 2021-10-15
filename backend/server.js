const express = require("express")
const mongoose = require("mongoose")
const productRoutes = require("./routes/productRoutes")

const dbconnect = require("./config/db")
require("dotenv").config()



dbconnect()

const app = express()

app.use(express.json())

app.use("/product", productRoutes)


const PORT = process.env.PORT || 8001

app.listen(process.env.PORT, () => console.log(`server running on port ${PORT}`))