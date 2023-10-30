// 상근이 먼저 게임 시작
// 1,3개만 가져갈수있다. 

// 4 > 1 , 1, 1, 1 > 창영
// 5 > 1 , 1, 1, 1, 1, 1 > 상근
//   > 3, 1, 1 > 상근 
// 6 > 1, 1, 3 , 1

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

var input = 5;
if(input % 2 !== 0) {
    console.log("SK")
} else {
    console.log("CY")
}