//let input = require('fs').readFileSync('/dev/stdin');
let input = `150
266
427`;

input = input.toString().split('\n').map(v=>+v);
const A = input[0];
const B = input[1];
const C = input[2];
let mul = (A * B * C).toString();
let result ;

for(let i=0; i<10; i++) {
  let tmp = i + '';
  // tmp 변수를 정규식에 사용하기 위해서 정규식 클래스 만들기 
  let regtmp = new RegExp(tmp, "gi"); //tmp를 대소문자 상관없이 모두 찾는 정규식을 regtmp 에 담는다!
  result = mul.match(regtmp);

  if (result !== null)  console.log(result.length);
  else console.log(0);
}
