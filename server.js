require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

// Check if there are more than 101 arguments
if(process.argv.length > 101) {
    console.error("Too many arguments! This program can handle up to 101 arguments only.");
    process.exit(1);
}

// Iterate through the arguments and display them
for (let i = 0; i < process.argv.length; i++) {
    console.log(`Argument ${i}: ${process.argv[i]}`);
}

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})
