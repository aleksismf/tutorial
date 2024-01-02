const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
   <h1>Oops!</h1>
   <p>We can't find the page you are looking for</p>
   <a href="/">back home</a>
    `)
})
//1:40
server.listen(5000)