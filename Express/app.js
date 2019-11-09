const express = require('express');

const app = express();
console.log(app);

app.get('/', (req, res)=>{
    res.send('This is the Home page');
})

app.get('/contact', (req, res)=>{
    res.send('this the contact');
})

app.get('/profile/:id', (req, res)=>{
    res.send(`You requested to see a profile with the ID of: ${req.params.id}` )
})

// app.get('/profile/:name', (req, res)=>{
//     res.send(`You requested to see a profile with the NAME of: ${req.params.name}` )
// });

app.listen(3000);