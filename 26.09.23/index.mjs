import http from 'http'
import { readFile} from 'fs/promises'

const server = http.createServer(async (req, res) => {
let data = await readFile("x1.html", "utf-8")

    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end(data)
})

server.listen(3000, '127.0.0.1', () => {
    console.log('dziala')
})