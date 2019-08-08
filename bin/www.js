const http = require('http');
const PORT = 3000;
const serverHandle = require('../app');

const app = http.createServer(serverHandle);
app.listen(PORT,() => {
    console.log(`app running at post ${POST}`);
})