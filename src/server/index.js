const dotenv = require('dotenc')
dotenv.config()
let path = require('path')
const express = require('express')
const app = express()

//API 
let textapi = new meaning({
    application_key: process.env.API_KEY
  });

const mockAPIResponse = require('./mockAPI.js')

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
