require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const fs = require('fs');

// Read the file and split it by line
const fileContents = fs.readFileSync('args.txt', 'utf-8');
const args = fileContents.trim().split('\n');

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})
