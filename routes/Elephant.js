var express = require('express');
const elephant_controlers= require('../controllers/elephant');
var router = express.Router();

/* GET costumes */ 
router.get('/', elephant_controlers.elephant_view_all_Page ); 
// GET request for one Elephant. 
router.get('/elephants/:id', elephant_controlers.Elephant_detail); 


module.exports = router;
