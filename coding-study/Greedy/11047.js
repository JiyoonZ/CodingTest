// 큰 순서의 지폐대로 주어진 돈으로 나눠준다.
// 나머지를 또 주어진 돈으로 교채 => 반복 
let input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`;

input = input.split('\n')
const N = Number(input[0].split(' ')[0]);
let K = Number(input.shift().split(' ')[1]);

let cnt = 0;
let coins = [];
for(let i=N-1; i>=0; i--) {
  coins.push(Number(input[i]));
}
for(let i=0; i<coins.length; i++) {
  if(coins[i] <= K) {
    cnt += Math.floor(K / coins[i]);
    K = K % coins[i];
  }
}
console.log(cnt);


console.log(coins,K, N)

