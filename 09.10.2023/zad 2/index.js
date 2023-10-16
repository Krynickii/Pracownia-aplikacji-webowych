const path = require('path')
const express = require('express')
const app = express()
const http = require('http')
const formProtect = require('./public/js/formProtection')

const port = 3000
const hostname = '127.0.0.1'

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, "glowna.html"))
})

app.get('/contact',(req, res) => {
    res.sendFile(path.join(__dirname, "kontakt.html"))
})

app.get('/form', (req, res) => { formProtect.message(res)})

app.listen(port, () => {
    console.log('nieWiem')
})