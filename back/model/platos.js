const mongoose = require('mongoose');

const PlatoSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    value:{
        type:Number,
        required: true
    },
    ingredients:{
        type:String,
        required:false
    }

})


module.exports = mongoose.model('Plato',PlatoSchema)