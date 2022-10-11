const apiV1 = require('express')();

const userRouter = require('../routes/route');

apiV1.use('/', userRouter);

module.exports= {
    v1:apiV1
}