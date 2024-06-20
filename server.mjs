import {createServer} from 'node:http';
import {unlink,writeFile} from 'node:fs';

// define request handler


// Create Http server
const server = createServer ((req, res) =>{
  
    console.log(req.url);
    if (req.url.includes('create')){
       // create file
       writeFile('./hello.html','<h1>whatsap Camey</h1>', ()=>{
           console.log('File added');
       });
       
       console.log('learning');
       // response return
       res.writeHead(200,{'Content-Type':'text/html'});
       res.end('<h1>File added</h1>');
    } else{
       unlink('./hello.html', ()=>{
           res.writeHead(200,{'Content-Type':'text/html'});
           res.end('<h1>File deleted</h1>');
            
       });
    }
});

  console.log('Server is running');
// Listen foe incoming request

server.listen(3000, '127.0.0.1', () => {
    
console.log('Server is Running')
});


// arrow function
const handleRequest = () => {}