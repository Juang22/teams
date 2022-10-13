const express = require('express');
const app = express();
const mongoose = require('mongoose')
const api = require('./config/api')
require('dotenv').config();

// app.use( (req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

const port = process.env.APP_PORT;
const uriMDB = process.env.MONGODB_URI;
//connect mongoDB database



app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use(express.json())
app.use('/api/v1', api.v1)
app.listen(port,(error) => {
    console.log(`listening in port ${port} `)
})
mongoose.connect(uriMDB).then(() => {
  console.log('connected to MongoDB Atlas')
}).catch((error) => console.log(error) )
