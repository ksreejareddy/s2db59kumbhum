var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var elephant_controller = require('../controllers/Elephant'); 

 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/elephants', elephant_controller.Elephant_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/elephants/:id', elephant_controller.Elephant_delete); 
 
// PUT request to update Costume. 
router.put('/elephants/:id', elephant_controller.Elephant_update_put); 
 
// GET request for one Costume. 
router.get('/elephants/:id', elephant_controller.Elephant_detail); 
 
// GET request for list of all Costume items. 
router.get('/elephants', elephant_controller.Elephant_list); 
 
module.exports = router;