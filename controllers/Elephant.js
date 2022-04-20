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
 
// Handle Elephant delete on DELETE. 
exports.Elephant_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Elephant.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Elephant update form on PUT. 
exports.Elephant_update_put =async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Elephant.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.breed)  
               toUpdate.breed = req.body.breed; 
        if(req.body.color) 
               toUpdate.color = req.body.color; 
        if(req.body.height) 
               toUpdate.height = req.body.height; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } 
    catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
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

 
 // Handle a show one view with id specified by query 
 exports.elephant_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Elephant.findById( req.query.id) 
        res.render('elephantdetail',  
{ title: 'Elephant Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 