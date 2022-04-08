// let input = require('fs').readFileSync('/dev/stdin');
let input = `9
1 2
3 2
1 2
2 1
2 1
3 2
1 3
3 1
1 2`;
input = input.toString().split('\n');
const N = input.shift();
// console.log(input);

let n_arr = [];
input = input.map((v,i) => {
  n_arr[i] = v.split(' ').map(v=>+v);
})

// 공은 항상 1에 들어있다. 배열[0]번째에 있다
// 위치는 서로 바꾼다. index를 바꾼다
let ball = [1, 2, 3]
for(let i=0; i<n_arr.length; i++) {

  // 주어진 숫자값이 몇번 box의 몇번 인덱스인지 -> 순서를 계속 바꾸기 때문에
  let first = ball.indexOf(n_arr[i][0]);
  let sec = ball.indexOf(n_arr[i][1]);
  
  //ball의 찾은 인덱스에 서로 바뀐 값 대입해주기
  ball[first] = n_arr[i][1];
  ball[sec] = n_arr[i][0];

}
console.log(ball[0]);






