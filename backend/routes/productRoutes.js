const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  res.end("hey bro ")
})

module.exports = router