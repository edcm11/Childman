const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playeraSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    link: String,
    pictures:[String],
    price:Number,
    description:String,

},{
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

module.exports = mongoose.model('Playera', playeraSchema)