//Requirments
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')
const FormData= require('form-data')

//API 
const apiURL = 'https://api.meaningcloud.com/sentiment-2.1/'

let form = new FormData()
form.append("key", process.env.API_KEY)
// formdata.append("txt", "")
form.append("lang", "en")

const requestOptions = {
    method: 'POST',
    body: form,
    redirect: 'follow'
}

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
    form.append("txt", formText)
    console.log(form)
    fetch(apiURL, requestOptions)
  .then(res => res.text())
  .then(text => console.log(text))   
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));
})