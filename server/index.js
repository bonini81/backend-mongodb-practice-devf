const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Endpoints
server.get('/', (req, res) => res.send('Hello World! My man'));



server.post('/api/v1/movies', (req, res) => res.status(201).send({ movies: [] }));

server.get('/api/v1/temario/:id', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.status(200).send("cool");
});

const Users = require('../models/Users');

// CRUD Usuario

// CREATE
server.post('/api/v1/users', (req, res) => {
 
});

// GET (ALL)
server.get('/api/v1/users', (req, res) => {
 
});

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };