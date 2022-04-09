//let input = require('fs').readFileSync('/dev/stdin');
//예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.
let input = `9
10 20 30 40 50 60 70 80 90`;
input = input.toString().split('\n');
const N = input[0];

let tmp = input[1].split(' ').map(v=>+v).sort((a,b) => b-a);

let result = 0;
let M = tmp[0];

for (let i=0; i<N; i++) {
  result += tmp[i]/M*100;
  console.log(result)

}
console.log(result/N);