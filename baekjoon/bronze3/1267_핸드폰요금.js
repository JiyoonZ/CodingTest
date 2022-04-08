// const input = require('fs').readFileSync('/dev/stdin')
let input = `2
60 65`;
// let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
input = input.toString().split("\n");
let result = input[1].split(" ").map(el => +el);
//영식
let y_tmp  = 0;
result.map(v => {
  if(v%30 === 0) {
    y_tmp += (v/30)*10+10;
  } else {
    y_tmp += ((Math.floor(v/30)) * 10 )+ 10;
  }
});
//만식
let m_tmp  = 0;
result.map(v => {
  if(v%60 === 0) {
    m_tmp += (v/60)*15+15;
  } else {
    m_tmp += ((Math.floor(v/60)) * 15 )+15;
  }
});

if (y_tmp > m_tmp) console.log('M', m_tmp);
else if (m_tmp > y_tmp) console.log('Y', y_tmp);
else console.log ('Y M', y_tmp);


// 다른풀이! 
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let call = input[1].split(" ").map((el) => Number(el));
// let m = 0;
// let y = 0;
// for (let i = 0; i < call.length; i++) {
// 	y += call[i] % 30 === 0 ? (call[i] / 30 + 1) * 10 : Math.ceil(call[i] / 30) * 10;
// 	m += call[i] % 60 === 0 ? (call[i] / 60 + 1) * 15 : Math.ceil(call[i] / 60) * 15;
// }

// if (m === y) console.log("Y M " + m);
// else if (m > y) console.log("Y " + y);
// else console.log("M " + m);