var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name =  name;
}

util.inherits(Person, events.EventEmitter);

var nathan = new Person('nathan');
var nord = new Person('nord');
var sumimasen = new Person('sumimasen');
var people = [nathan, nord, sumimasen];

people.forEach((person)=>{
person.on('speak', (msg)=>{
console.log(`${person.name} said ${msg}`);
    });
});

nathan.emit('speak', "watashi wa anata o ashiteimasu");
nord.emit('speak', "nan desu ka?");
sumimasen.emit('speak', "Nani");

