const http = require('http');

const server = http.createServer(()=>{
    console.log('request made')
})

server.listen(5000,'localhost',()=>{
    console.log('listening to port 3000')
})