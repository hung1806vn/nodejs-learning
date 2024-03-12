const express = require('express');
const mongoose = require('mongoose');
const routes = require('./server/routes/main');
const formidableMiddleware = require('express-formidable');

require('dotenv').config();

//Init
const app = express();

// parse json
app.use(formidableMiddleware());

app.use('/api', routes);

const connectDbWithRetry = mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected!");
    let server = app.listen(process.env.PORT || 3000, function () {
        console.log(`App listening on port ${server.address().port}!`)
    });
}).catch(err => {
    console.log(err);
    setTimeout(() => connectDbWithRetry, 1000)
})