const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num = 0;

rl.on('line', (line) => {
    num = Number(line.split(' ')[0]);
}).on('close', () => {
    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        console.log(str);
    }
});