const express = require('express');

const app = express()

//middleware parse req body to json
app.use(express.json())

app.use('/web18', (req, res, next) => {
    /*
    {
        "age": 18,
        "name": "hung"
    }
    */
    const user = req.body;
    if(user.age && user.age > 18){
        next();
    } else {
        res.status(400).send('Bạn không đủ 18 tuổi');
    }
})

app.post('/web18', (req, res) => {
    const user = req.body
    res.send(user);
})

app.post('/web18/haha', (req, res) => {
    const user = req.body
    res.send(user);
})

// app.get('/', (req, res) => {
//     // res.send({ some: 'json' });
//     // res.send('<p>some html</p>');
//     // res.status(404).send('Sorry, cant find that');
// })

app.listen(3000, function () {
    console.log("App listening on port 3000!")
});