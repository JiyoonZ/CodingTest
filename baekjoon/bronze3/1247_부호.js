let input = `3
0
0
0
10
1
2
4
8
16
32
64
128
256
-512
6
9223372036854775807
9223372036854775806
9223372036854775805
-9223372036854775807
-9223372036854775806
-9223372036854775804`;

input = input.toString().split('\n').map(v=>+v);
// console.log('초기값',input);

let index = 0;
let n_arr = [];

//테스트케이스 3개 반복
for(let i=0; i<3; i++) {
  let N = input.splice(index,1);
  n_arr[i] = input.splice(index, N);
  
  // 각요소들 더하기
  let result = 0;
  for(let j=0; j<n_arr[i].length; j++) {
    result += n_arr[i][j];
    if (j === n_arr[i].length-1) {
      if(result > 0) console.log('+')
      else if (result === 0) console.log('0')
      else console.log('-')
    }
  }
}