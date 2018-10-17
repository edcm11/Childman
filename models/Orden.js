
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const orderSchema = new Schema({
  producto:{
    type:Schema.Types.ObjectId,
    ref:'Playera'
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  prendas:{
    quantity:Number,
    price:Number
  },
  total:Number,
},{
  timestamps:{
    createdAt:'created_at',
    updatedAt:'updated_at'
  }
})

module.exports = mongoose.model('Order',orderSchema)