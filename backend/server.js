const http = require('http');
const app = require('./app');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
// make server listen on port
server.listen(3000);