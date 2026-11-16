mport http from "http"

const server = http.createserver ((req, res)=>{
    console.log ("hello")
 res.statuscode = 200 
const PORT = 3000 
const ADDRESS = "127.0.0.1"
server . listen (PORT , ADDRESS, ()=>{
    console.log ("server is running...");

})