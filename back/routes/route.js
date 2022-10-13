const express = require('express');
const routes = express.Router()
const PlatoSchema = require('../model/platos')
// const { login, servicios, register } = require('./operations')



routes.post('/platos',(req,res) => {
    // servicios(pool,req,result => {
    //     res.json(result)
    // })
    console.log(req.body)
    const plato = PlatoSchema(req.body);
    console.log(req.body)
    plato.save()
        .then(data => res.json(data))
        .catch(error => res.json({message:error}))
})

// routes.get('/teams',(req,res) => {
//     servicios(pool,req,result => {
//         res.json(result)
//     })
// })

// routes.post('/players',(req,res) => {
//     login(pool,req,result => {
//         res.json(result)
//     })
// })

// routes.post('/register',(req,res) => {
//     register(pool,req,result => {
//         res.json(result)
//     })
// })

// routes.put('/players  ',(req,res) => {
//     login(pool,req,result => {
//         res.json(result)
//     })
// })

module.exports = routes;
    
