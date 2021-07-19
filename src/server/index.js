//Requirments
const dotenv = require('dotenv')
dotenv.config()
let path = require('path')
const express = require('express')

//API 
var textapi = process.env.API_KEY


// Start Express
const app = express()
const port = 2076

const server = app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
})


//Initialize website
app.use(express.static('dist'))

//Data Storage

let data = {};

// Get Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/all', function(req, res) {
    res.send(data)
})

// Post route - add incoming data to data
app.post ('addData', addData)

function addData (req, res) {
    console.log(req.body)
    // TODO: add entries
    newEntry = {}
    data = newEntry
    res.send(data)
    console.log(data)
}