//let input = require('fs').readFileSync('/dev/stdin');
// 계속 메모리 초과뜬다...방법 새로 생각해야할듯...
let input = require('fs').readFileSync('/dev/stdin');
input = Number(input);
let result = [];
let cnt = 1;
for(let i=0; i<input; i++) {
  result[i] = cnt;
  cnt++
};
let tmp = [];
while(true) {
  if (result.length === 2) break;
  let first = result.shift();
  let sec = result.shift();
  tmp.push(first);
  result.push(sec);
}
tmp = tmp.concat(result);
console.log(tmp.join(' '));








