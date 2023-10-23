const express = require('express')
const path = require('path')

const port = 3000
const hostname = '127.0.0.1'
const app = express()

app.use(express.static(path.join('public')))
app.use(express.json())
app.use(express.urlencoded( { extended: true}))
const router = express.Router()

const students = [
    {"id": 1, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 2, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 3, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 4, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 5, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 6, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 7, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 8, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 9, "name": "kms", "surname": "kms", "email": "kms@kms.com"},
    {"id": 10, "name": "kms", "surname": "kms", "email": "kms@kms.com"}
]

router.get('/', (req, res) => {
    const links = {
        "students": "api/students",
        "subjects": "api/subjects"
    }

    res.send(links)
})

router.get('/students', (req, res) => {
    res.send(students)
})

router.get('api/students:id', (req, res) => {

})

router.get('api/subjects', (req, res) => {
    const subjects = [
        {"id": 1, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 2, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 3, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 4, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 5, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 6, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 7, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 8, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 9, "name": "łosoś", "hrsPerWeek": 0},
        {"id": 10, "name": "łosoś", "hrsPerWeek": 0}
    ]
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
})

app.use('/api', router)

app.listen(port, () => {
    console.log('poszedłem tylko kupić łososia')
})