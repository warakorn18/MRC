const express = require('express');
const router = express.Router();

// controller
const {create, list} = require('../Controller/miyama');

//end point
router.post('/miya',create);
router.get('/miya',list);


module.exports = router;
