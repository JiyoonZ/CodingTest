// 프로그래머스 lv2
// 소수 찾기
// 소수,,,
// 1과 자기자신 밖에 없을때
// 2,3,5,7,11,13,17,19,23
// 규칙-> 2부터 n-1 까지 나눴을때 나누어떨어지는거 없을때 ....

function solution(numbers) {
  let nums = [];
  for (let i = 0; i < numbers.length; i++) {
    nums.push(Number(numbers[i]));
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        nums.push(Number(numbers[i] + numbers[j]));
      }
    }
  }
  let answers = [];
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) break;
    }
    answers.push(nums[i]);
  }
  console.log(answers);
}

const numbers = "011";
solution(numbers);
