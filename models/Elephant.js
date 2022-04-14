const mongoose = require("mongoose") 
const ElephantSchema = mongoose.Schema({ 
    breed: String, 
 color: String, 
 height: Number 
}) 
 
module.exports = mongoose.model("Elephant", 
ElephantSchema)