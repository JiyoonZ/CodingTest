//let input = require('fs').readFileSync('/dev/stdin');
// 자바스크립트 Number 길이 관련 이슈
// BigInt 라는 함수를 사용해야한다. > 해당 함수때문세 toString()을 숫자로 변환 시킨담에 최종적으로 또 toString() 해야한다. 
//let input = require('fs').readFileSync('/dev/stdin').toString() * 1;
let input= 10;
let fibo = [0,1];
for(let i=2; i<=input; i++) {
    fibo[i] = BigInt(fibo[i-2])+BigInt(fibo[i-1]);
}
console.log(fibo[input].toString());

// const DP = [0, 1];

// for (let i = 1; i < input; i++) {
//     DP[i+1] = BigInt(DP[i]) + BigInt(DP[i-1]);
// }

// console.log(DP[input].toString());

