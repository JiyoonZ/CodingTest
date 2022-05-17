// 주어진 숫자 N
// 666이 포함되어있는 N번째로 작은수 
// 666이라는 숫자가 포함되어있는지
//const N = +require('fs').readFileSync('/dev/stdin');
const N = 3;
// 정해진 숫자 => 연속된 666
let num = 666;
// 입력받은 N개와 조건식에서 사용하기위해서
let cnt = 0;
// 666이 포함될때까지 더해질 변수 
let result = 0;
// N이 cnt와 같아지면 즉 N번째로 작은에 충족하면 나오기 
while(cnt !== N) {
  result++; // 일단 1씩 계속 더한다 
  if(String(result).includes(num)) { 
    // while문 돌면서 계속 더한 result 값에 666이 포함되면 그제서야 cnt++
    // cnt는 666이 포함될때만 증가하기 때문에 result는 N번째로 즉 cnt번째로 작은 666 포함 숫자이다. 
    cnt++;
  }
}
console.log(result);
