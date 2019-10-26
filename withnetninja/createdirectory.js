var fs = require('fs');

//fs.mkdirSync('Text');

fs.mkdirSync('TestFiles', function(){
    fs.writeFile('Test1.txt', 'This is Test 1', ()=>{});
});