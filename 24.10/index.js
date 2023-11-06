const express = require('express')
const path = require('path')
const {createConnection, Connection, MySqlError} = require('mysql')

const port = 3000
const hostname = '127.0.0.1'
const app = express()

app.use(express.static(path.join('public')))
app.use(express.json())
app.use(express.urlencoded( { extended: true}))
const router = express.Router()

const connection = createConnection({
    host: "172.22.48.1",
    user: "root",
    password: ""
})

connection.connect((err) => {
    if(err){
        throw err
    }
    console.log("connected")
})

const links = [
    {"name": "students", "url": "api/students/", "desc": "tablica danych o uczniach"},
    {"name": "subjects", "url": "api/subjects/", "desc": "tablica przedmiotów oraz ilość godzin na tydzień"}
]

app.use('/api', router)


router.get('/', (req, res) => {
    res.send(links)
})

router.get('/students/', (req, res) => {
    sql = "SELECT * FROM students"
    connection.query(sql, (err, result) => {
        if(err){
            throw err
        }
        console.log("Query executed")
    })
    res.send(sql)
})

router.get('/students/:id', (req, res) => {
    sql = `SELECT * FROM students WHERE id = ${req.params.id}`
    if(sql == null)res.sendStatus(404)
    connection.query(sql, (err, result) => {
        if(err){
            throw err
        }
        console.log("Query executed")
    })
    res.send(sql)
})

router.get('/subjects/', (req, res) => {
    sql = "SELECT * FROM subjects"
    connection.query(sql, (err, result) => {
        if(err){
            throw err
        }
        console.log("Query executed")
    })
    res.send(sql)
})

router.get('/subjects/:id', (req, res) => {
    sql = `SELECT * FROM subjects WHERE id = ${req.params.id}`
    if(sql == null)res.sendStatus(404)
    connection.query(sql, (err, result) => {
        if(err){
            throw err
        }
        console.log("Query executed")
    })
    res.send(sql)
})

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, "public/html/homepage.html"))
})

app.get('/contact',(req, res) => {
    res.sendFile(path.join(__dirname, "public/html/contact.html"))
})

app.post('/contact',(req, res) => {
    console.log(req.body)
    res.redirect('/')
    sql = "INSERT INTO forms(name, email, selection, message"
    connection.query(sql, (err, result) => {
        if(err){
            throw err
        }
        console.log("Record inserted")
    })
})

app.listen(port, () => {
    console.log('Łosoś')
})