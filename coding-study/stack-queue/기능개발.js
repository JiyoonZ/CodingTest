// 프로그래머스 > 스택/큐 문제
function solution(progresses, speeds) {
  var answer = [];
  // 진행률 + (속도*day) >= 100
  // day >= (100-진행률)/속도 
  let days = progresses.map((progress, i) => Math.ceil((100 - progress)/speeds[i]));
  //가장 처음에 있는 배열과 나머지 배열의 값 비교 
  //가장 처음에 있는 배열보다 작다면 모두 제거하기 , 크다면 멈추기..?
  let cnt = 0;      // 처리하는 횟수
  let tmp = days[0];      // 기준이되는 날짜 
  let j = 0;
  for(let i=0; i<days.length; i++) {
    
    if(days[i] <= tmp) {
      cnt++;
      answer[j] = cnt;
    } else {
      cnt=1;
      tmp = days[i];
      j++;
      answer[j] = cnt 
    } 

  }
  return answer;
}

const progresses =	[95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));


