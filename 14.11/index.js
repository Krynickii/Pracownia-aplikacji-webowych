const express = require('express')
const path = require('path')
const {PrismaClient} = require('@prisma/client')
const {MongoClient} = require('mongodb')

const prisma = new PrismaClient()

const port = 3001
const app = express()
const mongoUrl = "mongodb+srv://mikolajswiderski:gbkHJhqvzoKzMpaM@paw.sepdzhu.mongodb.net/?retryWrites=true&w=majority"
const router = express.Router()

app.use(express.static(path.join('public')))
app.use(express.json())
app.use(express.urlencoded( { extended: true}))
app.use('/api', router)

const links = [
    {"name": "students", "url": "api/students/", "desc": "tablica danych o uczniach"},
    {"name": "subjects", "url": "api/subjects/", "desc": "tablica przedmiotów oraz ilość godzin na tydzień"}
]

router.get('/', (req, res) => {
    res.send(links)
})

router.get('/students/', async (req, res) => {
    const _students = await prisma.students.findMany()
    res.send(_students)
})

router.get('/students/:id', async (req, res) => {
    const student_id = req.params.id
    _student = await prisma.students.findUnique({
        where: {id: parseInt(student_id)}
    })
    res.send(_student)
})

router.get('/subjects/', async (req, res) => {
    const _subjects = await prisma.subjects.findMany()
    res.send(_subjects)
})

router.get('/subjects/:id', async (req, res) => {
    const subject_id = req.params.id
    _subject = await prisma.subjects.findUnique({
        where: {id: parseInt(subject_id)}
    })
    res.send(_subject)
})

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, "public/html/homepage.html"))
})

app.get('/contact',(req, res) => {
    res.sendFile(path.join(__dirname, "public/html/contact.html"))
})

app.post('/contact', async (req, res) => {
    data = req.body
    try{
        const db = await MongoClient.connect(mongoUrl)
        const dbo = db.db("paw")
        let myObj
        if(data.name !== ""){
            myObj = { name: data.name, email: data.email, selection: data.selection, message: data.textarea }
        }else{
            myObj = { email: data.email, selection: data.selection, message: data.textarea }
        }

        try{
            await dbo.collection("contacts").insertOne(myObj)
        }catch (e){
            throw (e)
        }
        await db.close()
    } catch (e) {
        throw e
    }
    res.redirect('/')
})

app.listen(port, () => {
    console.log('winogrona czerwone 40 procent taniej')
})