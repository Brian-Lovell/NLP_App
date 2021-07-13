const express = require('express')
const app = express()
const port = 2076

app.listen(port, () => {
    console.log(`Hello there at http://localhost:${port}!`)
})