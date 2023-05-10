// lv2 2문제

// let input = "1 2 3 4";
// let tmp = input.split(" ");
// console.log(Math.min(...tmp) + " " + Math.max(...tmp));

// let input = "3people unFollowed me";

// function solution(s) {
//   let tmp = s.split(" ");
//   let answer = tmp
//     .map((x) => x.substring(0, 1).toUpperCase() + x.substring(1).toLowerCase())
//     .join(" ");
//   return answer;
// }
// console.log(solution(input));

// lv3 1문제
// n => 주어진 집합의 갯수
// s => 집합의 합계
// 자연수 2개가 아닐경우 -1 반환
function solution(n, s) {
  // 주어진 자연수의 개수가 합게보다 작다면 -1 반환
  if (n > s) return [-1];

  // 각 원소의 곱이 최대가 되는 원소값중 가장 작은 수
  const num = Math.floor(s / n);
  // 최고의 집합에서 num+1 의 개수
  const count = s % n;
  return [...new Array(n - count).fill(num), ...new Array(count).fill(num + 1)];
}
console.log(solution(3, 11));
