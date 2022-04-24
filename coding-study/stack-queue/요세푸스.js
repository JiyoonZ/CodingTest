//백준 문제 
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const input = `7 3`.split(' ');
const N = Number(input[0]);
const K = Number(input[1]);
console.log(N);
console.log(K);
// 주어진 N까지 넣을 큐자료의 배열과 
// 제거될 숫자를 모을 배열 1개싹
let queue = [];
let answer = '<';
// 
//  queque에 N까지 차례로 넣어주기 
for(let i=0; i<N; i++) {
  queue[i] = i+1;
}
//  K 칸씩 이동했는지 확인하는 변수
let cnt = 0;

while(queue.length) {
  cnt++;
  if(cnt === K) {
    answer += queue.shift();
    if(queue.length) {
      answer += ", ";
      cnt = 0;
    } else {
      answer += ">";
    }
  } else {
    queue.push(queue.shift());
  }
}


console.log(queue);
console.log(answer);