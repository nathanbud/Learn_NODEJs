
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let data = [{item : "get milk"}, {item : "do jogging"}, {item : "code"}, {item : "exercise"}, {item : "exercisesfsd"} ];
//let data = ["rtt","fsdfsdf", "fgdfgdfg" ]; 

const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req, res){
        res.render('todo', {todos : data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
       data.push(req.body); 
        res.json(data);
       
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

}