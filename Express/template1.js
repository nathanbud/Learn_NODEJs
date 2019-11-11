const express = require('express');
var bodyParser = require('body-parser');

const app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('css'));

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/contact', (req, res)=>{
  //  console.log(req.query);
    res.render('contact', {rq : req.query});
})

app.post('/contact', urlencodedParser, (req, res)=>{
    console.log(req.body);
    res.render('contact-success', {data : req.body});
})

app.get('/about', (req, res)=>{
    res.render('about');
})
app.get('/profile/:name', (req, res)=>{
    let data = {
        job: 'ninja',
        age: 345,
        hobbies: ['Basketball', 'Coding', 'Swimming', 'Travelling']
    }
    res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000);
