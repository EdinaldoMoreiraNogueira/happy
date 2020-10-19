const express = require('express');
const path = require('path');
const pages = require('./pages');

const server = express();

server

.use(express.static('public'))

.set('views', path.join(__dirname, 'views'))
.set('view engine','hbs');

server.get('/', pages.index)
server.get('/orphanege', pages.orphanege)
server.get('/orphaneges', pages.orphaneges)
server.get('/create-orphanege', pages.createOrphanege)


server.listen(3000)