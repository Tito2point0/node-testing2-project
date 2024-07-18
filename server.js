const express = require("express")

const server = express()

const jokesRouter = require("./api/index.js")



server.use(express.json())

server.use("/jokes", jokesRouter)
//not sure what /jokes does but its currently a place holder for what ever the / jokes directory does


module.exports = server