// P1 = 3, P2 = 1, P3 = 4, P4 = 3, P5 = 2
let input = `5
3 1 4 3 2`;

input = input.toString().trim().split('\n');
let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
// 작은순으로 정렬하기 
let sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr)
let answer = 0;

// 주어진 사람수만큼 반복
const result = sortedArr.reduce((acc, curr) => {
  // 0 + 1 = 1
  // 1 + 2 = 3  , 1 + 3
  // 3 + 3 = 6  , 4 + 6
  // 6 + 3 = 9  , 10 + 9
  // 9 + 4 = 13 , 19 + 13 = 12
  answer += acc + curr
  return acc + curr
},0)
console.log(answer, result);