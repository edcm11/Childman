const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playeraSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    categoria: {
        type:String,
        enum:['Mujer', 'Hombre','Niños'],
        required: true
    },
    tallas: {
        type:[String],
        enum:['S','M','L']
    },
    pictures:[String],
    price:{
        type:Number,
        required: true  
    },
    description:String,

},{
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

module.exports = mongoose.model('Playera', playeraSchema)