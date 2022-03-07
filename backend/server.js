const http = require('http');

const server = http.createServer((req,res)=>{
res.end('hellow mimi');
});
// make server listen on port
server.listen(3000);