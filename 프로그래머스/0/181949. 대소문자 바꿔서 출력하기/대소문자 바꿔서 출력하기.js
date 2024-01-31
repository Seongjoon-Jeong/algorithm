const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0].split('');
    let result = "";
    
    str.forEach((value) => {
        if (value === value.toUpperCase()) {
            result += value.toLowerCase();
        } else {
            result += value.toUpperCase();
        }
    });
    
    console.log(result);
});
    
