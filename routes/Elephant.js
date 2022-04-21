var express = require('express');
const elephant_controlers= require('../controllers/elephant');
var router = express.Router();

/* GET costumes */ 
router.get('/', elephant_controlers.elephant_view_all_Page ); 
// GET request for one Elephant. 
router.get('/elephants/:id', elephant_controlers.Elephant_detail); 
/* GET detail elephant page */ 
router.get('/detail', elephant_controlers.elephant_view_one_Page); 
/* GET create elephant page */ 
router.get('/create', elephant_controlers.elephant_create_Page); 
/* GET create update elephant page */ 
router.get('/update', elephant_controlers.elephant_update_Page); 
/* GET delete elephant page */ 
router.get('/delete', elephant_controlers.elephant_delete_Page);
 
module.exports = router;
