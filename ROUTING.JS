import http from 'http'
const server = http.createServer((req,res))=>{
    res.end ("Welcome from server")
}}
server.listen(3000,())
console.log("Server is Running...");

})