const mongoose = require('mongoose')

const ScoresSchema = new mongoose.Schema({
    name: {type:String, requried :true},
    score: {type:Number, required:true}
})

//exporting the score schema as a model 
//score model sontains two attributes according to the score schema
//name attribute and score attribute 
module.exports = mongoose.model('Score', ScoresSchema)