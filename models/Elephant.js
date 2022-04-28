const mongoose = require("mongoose") 
const ElephantSchema = mongoose.Schema({ 
    breed: { type: String, required: [true, "Breed of elephant can not be blank"] },

    color: { type: String, required: [true, "elephant Color can not be blank"] },



    height: {

        type: Number, required: [true, "height of the elephant is required"],

        min: [10, "elephant height Should be minimum of $100 "],

        max: [500000, "elephant height Cannot be greater than $500000 "]

    }})
 
module.exports = mongoose.model("Elephant", 
ElephantSchema)