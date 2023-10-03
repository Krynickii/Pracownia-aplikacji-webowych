const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res) => {
    const url = req.url

    if(url === '/'){
        await fs.readFile("main.html", "utf-8", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('<html>');
            res.write('<head><title>Enter</title></head>')
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html');
            return res.end()
        })
    }else if(url === '/dziekujemy'){
        await fs.readFile("notMain.html", "utf-8", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }else if(url === '/api'){
        const fun = {
            'x1' : 1,
            'x2' : 2,
            'x3' : 3
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(JSON.stringify(fun))
    }else if(url === '/kontakt'){
        const body = []
        req.on('data', (chunk) => {
        body.push(chunk)
    })
    req.on('end', async () => {

    })
    }else{
        res.statusCode = 404
        res.write(JSON.stringify('Zly Adres'))
        res.end()
    }

    res.writeHead(200, {'Content-Type': 'text/html'})
})
server.listen(port, hostname, () => {
    console.log(".....")
})