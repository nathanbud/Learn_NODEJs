var events= require('events');

var myEmitter = new events.EventEmitter();

    myEmitter.on('someEvent', function(msg){
        console.log(`This is passed from the parameter: ${msg}`)
    })

    myEmitter.emit('someEvent', "My message");
