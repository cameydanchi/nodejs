import {writeFile} from 'node:fs';

writeFile('./hello.html','<h1>whatsap Camey</h1>', ()=>{
    console.log('File added');
});

console.log('learning')