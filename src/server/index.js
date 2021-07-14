let path = require('path')
const express = require('express')
const app = express()
const port = 8080
const mockAPIResponse = require('./mockAPI.js')

app.listen(port, () => {
    console.log(`Hello there at http://localhost:${port}!`)
})

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})