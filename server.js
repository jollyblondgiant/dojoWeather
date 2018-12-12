var express, app, bodyParser, server, session, flash, path

express = require('express')
app = express()
bodyParser = require('body-parser')
path = require('path')

app.use(bodyParser.json())

app.use(express.static(__dirname + '/weather/dist/weather'))

app.all("*", (req,res,next)=>{
    res.sendFile(path.resolve("./weather/dist/weather/index.html"))
})




server = app.listen(1337)