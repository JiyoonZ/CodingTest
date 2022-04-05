// 8진수를 2진수로 
// 8은 2의 3승 이므로 3자리수 끊어서
// 314 > 11001100
// 011. 001. 100 => 앞에 0을 뺸것

//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let input = `314`;
input = input.split('');

let binary = new Array(input.length*3);
let cnt = 2;

const result = input.map(v => {
  let value = +v;
  let mod;
  for(let i=0; i<3; i++) {
    mod = value%2;
    value = Math.floor(value/2);  
    binary[cnt-i] = mod;
  }
  cnt = cnt+3;
});
// 맨처음 0은 제거
for(let i=0; i<binary.length; i++) {
  if(binary[0]===0) {
    binary.shift();
  } else {
    break;
  }
}

// if( binary[0] !== 1) { binary.shift();}

console.log(binary.join(''));