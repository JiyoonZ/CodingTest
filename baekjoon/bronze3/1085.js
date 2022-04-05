//const input = require('fs').readFileSync("./dev/stdin").toString().split(' ').map(v=>+v);
let input = `6 2 10 3`;
input = input.split(' ').map(v=>+v);

let result = new Array(input.length);
result[0] = input[0];
result[1] = input[1];
result[2] = input[2]-input[0];
result[3] = input[3]-input[1];
result.sort((a,b) => a-b) 
const min = result[0];

console.log(min);
// console.log(result);