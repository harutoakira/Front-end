const express = require("express")
const path = require("path")

const app = epxress()
const server = require("http").createServer(app)
app.use(express.static(path.join(__dirname+"/public")))

server.listen(5000)
