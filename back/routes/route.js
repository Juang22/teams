const express = require('express');
const routes = express.Router()
// const { login, servicios, register } = require('./operations')



routes.get('/players',(req,res) => {
    servicios(pool,req,result => {
        res.json(result)
    })
})

routes.get('/teams',(req,res) => {
    servicios(pool,req,result => {
        res.json(result)
    })
})

routes.post('/players',(req,res) => {
    login(pool,req,result => {
        res.json(result)
    })
})

routes.post('/register',(req,res) => {
    register(pool,req,result => {
        res.json(result)
    })
})

routes.put('/players  ',(req,res) => {
    login(pool,req,result => {
        res.json(result)
    })
})

module.exports = routes;
    
