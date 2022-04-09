// 시간초과를 줄이는방법
// 1. 출력 횟수를 최소화한다.
// 2. 메서드나 연산을 사용한 값을 그때그때 넣는것이 아니라 변수에 넣고 사용하기..
// 3. map(v=>+v) 보다 요소 하나하나를 그냥 Number 함수로 감싸자

//let input = require('fs').readFileSync('/dev/stdin');
let input = `5
1 1
12 34
5 500
40 60
1000 1000`;
input = input.toString().split("\n");
let max = Number(input[0]);
let result = '';

for (let i=1; i<=max; i++) {
  let tmp = input[i].split(' ');
  result += Number(tmp[0]) + Number(tmp[1]) + "\n";
}
console.log(result);



// ---------------방법2 이건 구현은 되는데 제출시 오답뜬다.
// input.shift();
// let result = '';
// for (let i=0; i<input.length; i++) {
//   let tmp = input[i].split(' ').map(v=>+v);
//   result += tmp[0] + tmp[1] + "\n";
// }
// console.log(result);