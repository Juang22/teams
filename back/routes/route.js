const express = require('express');
const routes = express.Router()
const PlatoSchema = require('../model/platos')

// const { login, servicios, register } = require('./operations')



routes.post('/platos',(req,res) => {
    
    const plato = PlatoSchema(req.body);
    plato.save()
        .then(data => res.json(data))
        .catch(error => res.json({message:error}))
})

routes.get('/platos',(req,res) => {
    PlatoSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({message:error}))
    
})

routes.get('/platos/:name',(req,res) => {
    const { name } = req.params;
    PlatoSchema
        .findOne({name:name})
        .then(data => res.json(data))
        .catch(error => res.json({message:error}))
    
})

routes.put('/platos/:namePlato',(req,res) => {
    const { namePlato } = req.params;
    const { name, value, ingredients } = req.body;
    PlatoSchema
        .updateOne({name:namePlato},{$set: {name, value, ingredients}})
        .then(data => res.json(data))
        .catch(error => res.json({message:error}))
    
})

routes.delete('/platos/:name',(req,res) => {
    const { name } = req.params;
    PlatoSchema
        .deleteOne({name:name})
        .then(data => res.json(data))
        .catch(error => res.json({message:error}))
    
})


module.exports = routes;
    
