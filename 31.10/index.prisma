const express = require('express');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const port = 3000;
const hostname = '127.0.0.1';
const app = express();
const prisma = new PrismaClient();

app.use(express.static(path.join('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true });

const router = express.Router();

const links = [
  { name: "students", url: "api/students/", desc: "tablica danych o uczniach" },
  { name: "subjects", url: "api/subjects/", desc: "tablica przedmiotów oraz ilość godzin na tydzień" },
];

app.use('/api', router);

router.get('/', (req, res) => {
  res.send(links);
});

router.get('/students/', async (req, res) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

router.get('/students/:id', async (req, res) => {
  const student = await prisma.student.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (student == null) {
    res.sendStatus(404);
  } else {
    res.json(student);
  }
});

router.get('/subjects/', async (req, res) => {
  const subjects = await prisma.subject.findMany();
  res.json(subjects);
});

router.get('/subjects/:id', async (req, res) => {
  const subject = await prisma.subject.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (subject == null) {
    res.sendStatus(404);
  } else {
    res.json(subject);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/homepage.html"));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/contact.html"));
});

app.post('/contact', async (req, res) => {
  console.log(req.body);

  const { name, email, selection, message } = req.body;

  await prisma.form.create({
    data: {
      name,
      email,
      selection,
      message,
    },
  });

  console.log("Record inserted");
  res.redirect('/');
});

app.listen(port, () => {
  console.log('Łosoś');
});
