require('dotenv').config()
const express = require('express')
const main = require("./web3.js")

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

