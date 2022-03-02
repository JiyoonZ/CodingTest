// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

const input2 = `5
55 185
58 183
88 186
60 175
46 155`;

input = input2.toString().trim().split(/\n+/);
const num = input.shift();
const kgCm = input.map(x => x.split(' ').map(n => +n));

let rank = [];
//5명 탐색 
for(let i=0; i<num; i++) {
  
  let cnt = 0;
  //1명에게 5명 탐색
  for(let j=0; j<num; j++){
    if (i != j) {
      // 첫번째 사람이 비교대상보다 키도 몸무게도 작다면?
      if(kgCm[i][0] < kgCm[j][0] && kgCm[i][1] < kgCm[j][1]) {
        cnt++;
      }
    } 
  }
  rank.push(cnt+1);
}

console.log(rank.join(' '))