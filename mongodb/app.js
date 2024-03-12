const express = require('express');
const formidableMiddleware = require('express-formidable');

//Init
const app = express();

// parse json
app.use(formidableMiddleware());

app.listen(3000, function () {
    console.log("App listening on port 3000!")
});