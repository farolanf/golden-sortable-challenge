const express = require('express')
const app = express()

app.use(express.static('frontend/build'))

module.exports = app