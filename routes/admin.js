const express = require('express')
const router = express.Router()
const Playera = require('../models/Playera')
const uploadCloud = require('../helpers/cloudinary')

router.post('/admin', uploadCloud.single('imageURL'), (req,res,next)=>{
    if(req.file)req.body.imageURL = req.file.url
    Playera.create(req.body)
    .then(p=>{
        res.status(201).json(p)
    })
    .catch(e=>next(e))
})

module.exports = router