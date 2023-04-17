// let input = `5
// 20 10 35 30 7`
//   .toString()
//   .trim()
//   .split("\n");
// let N = +input[0];
// let Nums = input[1].split(" ").map(Number);
// console.log(Nums);
// let min = Nums.reduce((a, b) => Math.min(a, b));
// let max = Nums.reduce((a, b) => Math.max(a, b));
// console.log(min, max);

//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// const input = "1 2"
//   .toString()
//   .trim()
//   .split(" ").map(Number);

// console.log(input[0]-input[1]);

// const num = 5;
// var result = "";
// var spot = 5;
// for (let i = 0; i < num; i++) {
//   for (let j = 0; j < num - i - 1; j++) {
//     result += " ";
//   }

//   for (let k = 0; k <= i; k++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// let input = require("fs").readFileSync("/dev/stdin").toString();

// let num = 5;

// for (let i = 0; i < num; i++) {
//   let star = "";

//   for (let j = num - 1; j >= 0; j--) {
//     star += j <= i ? "*" : " ";
//   }

//   console.log(star);
// }

let num = 5;

let star = new Array(num).fill(" ");

for (let i = num - 1; i >= 0; i--) {
  star[i] = "*";

  console.log(star);
}
