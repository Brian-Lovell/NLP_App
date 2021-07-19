//Requirments
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')

//API 
const apiKey = process.env.API_KEY
const apiURL = 'https://api.meaningcloud.com/sentiment-2.1/'


// Start Express
const app = express()
const port = 2076

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
})

//Parse URL-encoded data with querystring library
app.use(bodyParser.urlencoded({ extended: false }))
//  Parse application/json
app.use(bodyParser.json())

// Enable All CORS Requests
app.use(cors())

//Initialize website
app.use(express.static('dist'))

//Store API respone data

let apiData = {};

// Get Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})



// Post route 
app.post('/analyze', async function (req, res) {
    formText = req.body.url
    fetchURL = apiURL+apiKey+'/'+formText
    res = await fetch(fetchURL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date: data.date,
            temp: data.temp,
        }),
    })
    try {
        const newData = await res.json()
        console.log(newData)
        return newData
    } catch(error) {
        console.log("error",error)
    }
})