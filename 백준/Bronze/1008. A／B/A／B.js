const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const result = Number(input[0])/Number(input[1]);
console.log(result);