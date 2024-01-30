const input = require("fs").readFileSync("/dev/stdin").toString();
const rawYear = Number(input);
const difference = 2541 - 1998;
console.log(rawYear - difference);