const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Initial Endpoit
server.get('/', (req, res) => res.send('Hello World! My man'));


//Basicamente aqui pido el enrutador y desde ahi se delega lo mas, cada uno a lo suyo
server.use('/api/v1',  require('../router'));

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };