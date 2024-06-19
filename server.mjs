import {createServer} from 'node:http';

// define request handler


// Create Http server
const server = createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>We have an HTTP Server</h1>');
});
console.log('Server is running');
// Listen foe incoming request

server.listen(3000, '127.0.0.1', () => {
console.log('Server is Running')
});


// arrow function
const handleRequest = () => {}