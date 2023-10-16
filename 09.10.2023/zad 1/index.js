const Stream = require('stream')
const Fs = require('fs')

const generate = () => {
    let numbers = []
    for(i = 0; i < 20; i++){
        numbers.push(Math.floor(Math.random() * 2577) - 420)
    }
    return numbers
}

const readable = Stream.Readable.from(generate())
const fileStream = Fs.createWriteStream(`textfiles/random-${Date.now().toString()}.txt`)


readable.on('data', (chunk) => {
    fileStream.write(chunk.toString() + " ")
})