//1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 1이 될때까지 반복한 횟수 > 단 500번 반복해도 1이 되지 않는다면 -1 반환한다.

function solution(num) {
  var answer = 0;

  while (num !== 1) {
      if( num % 2 === 0) {
          num /= 2;
          answer++;
      } else {
          num = (num*3) + 1;
          answer++;
      }
      if (answer > 500) {
          answer = -1;
          break;
      }
  }
  return answer;
}