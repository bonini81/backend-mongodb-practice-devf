/* Lo de routs */
const express = require('express');
const router = express.Router();
const {EnlacesController} = require('../controller');


//CREATE 
router.post('/enlaces', EnlacesController.create  );



module.exports = router;