//let input = require('fs').readFileSync('/dev/stdin');
// 일단 뒷에 두자리 모두 0으로 변경
// 0으로 바꾼것을 F 로 나누었을때 나눠떨어지면 그대로
// 나누어 떨어 지지 않을때 ((0으로바꾼숫자/F)+1) * F
// 기존 숫자가 나눠떨어진다고 해도 어차피 같은값 

let input = `175
7`;
input = input.toString().split('\n').map(v=>+v);
const N = input[0];
const F = input[1];

let result;
// tmp에 주어진 N값을 배열에 넣어준후 마지막 2개방에 위치한 배열에 0을대입
let tmp = N.toString().split('').map(v=>+v);
tmp[tmp.length-2] = 0;
tmp[tmp.length-1] = 0;
tmp = tmp.join('');
//00으로 바꾼 숫자가 F로 나누어 떨어지면 그대로 00으로 적용 (어차피 제일작은 값이기때문)
// 나누어 떨어지지 않는다면 F로 나눈 몫에 1을 더한후 F를 더한값
tmp%F === 0 ? result=tmp : result=(Math.ceil(tmp/F))*F;
//substr 사용위해 string으로 변경
result = result + '';
console.log(result.substr(result.length-2, 2));

