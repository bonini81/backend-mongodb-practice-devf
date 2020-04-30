const express = require('express')
const server = express()
const port = 3000
//cambiar de app a server mejorar la parte de naming

server.get('/', (req, res) => res.send('Hello World! Madafaka!'))



//module.exports = app;

server.listen(port, () => console.log(`Listening at http://localhost:${port}`))