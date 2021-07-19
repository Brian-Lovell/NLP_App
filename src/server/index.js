//Requirments
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')

//API 
const textapi = process.env.API_KEY
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1/'


// Start Express
const app = express()
const port = 2076

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
})


//Initialize website
app.use(express.static('dist'))

//Store API respone data

let apiData = {};

// Get Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/all', function(req, res) {
    res.send(apiData)
})

// Post route - add incoming data to data
app.post ('/addData', addData)

function addData (req, res) {
    console.log(req.body)
    // TODO: add entries
    newEntry = {
        irony: req.body.irony,
        status = req.body.msg,
    }
    apiData = newEntry
    res.send(apiData)
    console.log(apiData)
}