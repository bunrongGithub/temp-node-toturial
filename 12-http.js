const http = require('http');
const server = http.createServer((req ,  res) =>{
   const url = req.url;
   const respone = url === '/' ? 
                        'Here is our home page' : 
                        url === '/about' ? 
                        'Here is our short history' : 
                        '';
   res.end(respone); 
   res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for!</p>
      <a href="/">Back home page</a>
   `)
})
server.listen(5000)