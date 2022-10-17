const mongoose = require('mongoose');

const PlatoSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    ingredients:{
        type:String,
        required:false
    },
    value:{
        type:Number,
        required: true
    }

})


module.exports = mongoose.model('Plato',PlatoSchema)