const express = require('express'),
    bodyParser = require('body-parser'),
    homeRouter = require('./routes/home');

const app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use((request, response, next) => {
    request.io = io
    next()
})

app.use(express.static('public'));
app.use(bodyParser.json())

app.use(homeRouter)


app.get('/404', (request, response) => {
    response.render('errors/404')
})

server.listen(3000);