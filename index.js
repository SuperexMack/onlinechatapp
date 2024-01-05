const http = require("http")
const express = require("express")
const app = express()
const server = http.createServer(app)
const {Server} = require("socket.io")
const path = require("path")
const io = new Server(server) //const server = http.createServer(app) ye wala server hamne iske aandar pass kar diya hai

const port = 3000;

app.set("view engine" , "ejs" );
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname,"/public")))


// app.use(express.static(path.join(__dirname,"/public")))


// here we will handle our server io

io.on("connection" , (socket) =>{

// console.log("a new user has connected" , socket.id)
socket.on("mohit" , (rolla)=>{


// console.log("a new msg had arrived : " , rolla)

io.emit("mallu" , rolla)


})

})


app.get("/" , (req,res)=>{

res.render("index.ejs")


})

server.listen(port, (req,res)=>{

console.log(`server is ruuning at port Number ${port}`)


})


