const express = require("express")
const path = require("path")

const app = express()
const server = require("http").createServer(app)

const io = require("socket.io")(server)


// app.use(express.static(path.join(__dirname+"/public")))
app.use(express.static('public'));


io.on("connection",function(socket){
    socket.on("newuser",function(username){
        socket.broadcast.emit("update",username + "Joined the conversation")
    });
    socket.on("exituser",function(username){
        socket.broadcast.emit("update",username + "Left the conversation")
    });
    socket.on("chat",function(message){
        socket.broadcast.emit("chat",message)
    });
});

server.listen(5000,function(){

    console.log("connect")
})

