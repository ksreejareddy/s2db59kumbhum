var Elephant = require('../models/Elephant'); 
 
// List of all Elephants 
exports.Elephant_list = async function(req, res) { 
    try{ 
        theElephant = await Elephant.find(); 
        res.send(theElephant); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.Elephant_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Elephant.findById( req.params.id) 
        res.send(result) 
    }
    catch (err) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
 
// Handle Elephant create on POST. 
exports.Elephant_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Elephant(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.breed = req.body.breed; 
    document.color = req.body.color; 
    document.height = req.body.height; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
        } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Elephant delete form on DELETE. 
exports.Elephant_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Elephant delete DELETE ' + req.params.id); 
}; 
 
// Handle Elephant update form on PUT. 
exports.Elephant_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Elephant update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.elephant_view_all_Page = async function(req, res) { 
    try{ 
        theElephant = await Elephant.find(); 
        res.render('Elephant', { title: 'Elephant Search Results', results: theElephant }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 