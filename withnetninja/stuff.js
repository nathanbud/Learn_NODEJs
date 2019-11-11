var counter = function(arr){
 return console.log(`the length of the array is ${arr.length}`);
}

var adder = function(a, b){
    return console.log(a + b);
}

var subtract = function(a, b){
    return console.log(a - b);
}
var multiplier = function(a, b){
    return console.log(a * b);
}
var divider = function(a, b){
    return console.log(a / b);
}
//ways to export
//way:1
//module.exports.pi = 3.1314;
var pi = 3.1314;

//way:2
//module.exports.counter= counter;
//module.exports.adder = adder;
//way 3
module.exports = {
    counter: counter,
    subtract: subtract,
    multiplier: multiplier,
    divider: divider,
    pi: pi
};
