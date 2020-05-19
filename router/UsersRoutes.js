/* Lo de routs */
const express = require('express');
const router = express.Router();
const {UsersController} = require('../controller');

//CREATE 
router.post('/users', UsersController.create  );

//GET (ALL)
router.get('/users', UsersController.find);

// GET (ONE)
router.get('/users/:id', UsersController.findById);

//UPDATE
router.patch('/users/:id', UsersController.findByIdAndUpdate);

//DELETE
router.delete('/users/:id', UsersController.findByIdAndDelete);


//Routes for SignUp Form
router.post('/users/signup', UsersController.signup  );

module.exports = router;

/*
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));*/

