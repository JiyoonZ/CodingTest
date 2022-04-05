// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

const num = `5
1
3
8
-2
2`;
//입력값 받은후 정렬 
let nums = num.toString().trim().split(/\s+/).map(x=>+x);
const N = +nums.shift();
nums.sort((a,b) => a-b);
//합계
let total = 0;
nums.forEach((num) => total += num);
total = Math.round(total/N);
//중앙값 
let mid = nums[Math.round(N/2) - 1];

// 최빈값
const map = new Map();
for(let i=0; i<N; i++) {
  //찾으려는 값을 처음 찾았을때는 1을 세팅 
  if(!map.has(nums[i])) {
    map.set(nums[i], 1);  
  } else {
    //찾고있는 값이 처음이 아니라 이미 존재할때 +1 해주기! 
    map.set(nums[i], map.get(nums[i]) + 1)
  }
}
let maxValue = 0;
let answer = [];
map.forEach((element, key) => {
  if(maxValue<element) {
    //1개이상 찾으면 찾은횟수를 max에 그때그때 저장해주기 
    maxValue = element;
    // 이전에 지정된 maxValue보다 더큰값 찾으면 answer배열 초기화시키기
    answer = [];
    answer.push(key);
  } else if(maxValue === map.get(key)) {
    answer.push(key)
  }
})
let mostValue = answer.length !== 1 ? answer[1] : answer[0]

//범위
let scope = nums[N-1] - nums[0];



console.log(total);
console.log(mid);
console.log(mostValue)
console.log(scope)