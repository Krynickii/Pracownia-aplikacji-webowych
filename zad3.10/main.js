const http = require('http')
const fs = require('fs')
const { error } = require('console')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res) => {
    const url = req.url

    if(url === '/'){
        await fs.readFile("index.html", "utf-8", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }else if(url === '/dziekujemy'){
        await fs.readFile("notIndex.html", "utf-8", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }else if(url === '/api'){
        const bruh = {
            'x1': 1,
            'x2': 2,
            'x3': 3,
            'x4': 4
        }
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(bruh))
    }else if(url === '/kontakt'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            await fs.writeFileSync(`contact/message-${Date.now().toString()}.txt`, message)

            res.writeHead(302, { 'Location': "/"})
            res.end()
        })
    }else{
        const error = { '404' : 'Address not found'}

        res.writeHead(404, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify(error))
    }
})

server.listen(port, hostname, () => {
    console.log("dziala")
})