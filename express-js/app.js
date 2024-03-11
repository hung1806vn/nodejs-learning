const express = require('express');
const formidableMiddleware = require('express-formidable');

const app = express()

//middleware parse req body to json
// app.use(express.json())
app.use(formidableMiddleware());

app.use('/web18', (req, res, next) => {
    /*
    {
        "age": 18,
        "name": "hung"
    }
    */
    // const user = req.body;
    // const user = req.fields;
    const user = {...req.fields, approve : true};
    if(user.age && user.age > 18){
        req.fields.approve = false;
        next();
    } else {
        res.status(400).send('Bạn không đủ 18 tuổi');
    }
})

app.post('/web18', (req, res) => {
    const user = req.fields
    res.send(user);
})

app.post('/web18/haha', (req, res) => {
    const user = req.body
    res.send(user);
})

app.post('/formdata', (req, res) => {
    req.fields;
    console.log(req.fields);
    res.send(req.fields);
})

// app.get('/', (req, res) => {
//     // res.send({ some: 'json' });
//     // res.send('<p>some html</p>');
//     // res.status(404).send('Sorry, cant find that');
// })

app.listen(3000, function () {
    console.log("App listening on port 3000!")
});