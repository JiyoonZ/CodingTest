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

// 다른방법
// let num = input;
// let sum;
// let count = 0;

// while (true) {
//   count++;
//    // 10으로 나누면 첫번째 자리수
//    // 10으로 나누 나머지 몫은 2번째 자리수
//   sum = Math.floor(num / 10) + (num % 10);
//   // 오른쪽 자리의 수에 * 10
//   // 합계중 오른쪽 자리의 수는 10으로 나눈 나머지 몫
//   num = (num % 10) * 10 + (sum % 10);
//   if (input == num) {
//     console.log(count);
//     break;
//   }
// }
