//26
// 2 + 6 = 8  ,68
// 6 + 8 = 14 , 84
// 8 + 4 = 12 , 42
// 4 + 2 = 6  , 26
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let input = 1;
input = input.toString().trim();
if (input < 10) {
  input = "0" + input;
}
let cnt = 0;

function cycle(tmp) {
  cnt++;
  const left = +tmp[0];
  const right = +tmp[1];
  let result = left + right;

  let answer = 0;

  if (result < 10) {
    result = "0" + result;
    answer = right + result[1];
  } else {
    result += "";
    answer = right + result[1];
  }
  if (answer === input) {
    return cnt;
  } else {
    return cycle(answer);
  }
}

console.log(cycle(input));
