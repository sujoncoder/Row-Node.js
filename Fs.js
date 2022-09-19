const fs = require('fs');

// create file and inside some text.
fs.writeFileSync('myfile.txt', 'Hello programmers')

// Added some same file.
fs.appendFileSync('myfile.txt', ' I am too lazy')

// Read file.
fs.readFile('myfile.txt', (error, data) => {
    console.log(data.toString())
})


console.log('hello world')
