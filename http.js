const colors = require('colors');
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.write('HELLO WORLD...i am programmer..how are you')
        res.end();
    } else if (req.url === '/about'){
        res.write('I AM LEARNING FULLSTACK DEVELOPER.')
        res.end();
    } else if (req.url === '/contact'){
        res.write('EVERY PROGRAMMER CONTACT HAS: 0101010101010101010101010101011010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101');
        res.end();
    } else {
        res.write('PAGE NOT FOUND PLEASE CHEECK YOUR ROUTE.');
        res.end()
    }
})

server.listen(5000)
console.log('NOW i am learning BACKEND' .red.bold)