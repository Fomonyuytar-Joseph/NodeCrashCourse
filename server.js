const http = require('http');

const server = http.createServer((req ,res)=>{
    console.log(req.url ,req.method);

    //set header content type
    res.setHeader('Content-Type','text/html');
    res.write('<p>hello Joe</p>');
    res.write('<p> </p>');
    res.end();
})

server.listen(5000,'localhost',()=>{
    console.log('listening to port 3000')
})