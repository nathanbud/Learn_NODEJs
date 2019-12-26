let hex = 'EE2FFF';
let pattern = /^[a-fA-F0-9]+$/g;
let res = hex.match(pattern);
console.log(res);

if(res){
    console.log("Valid Hexadecimal number");
}else{
    console.log("NOt Valid Hexadecimal number");
}
