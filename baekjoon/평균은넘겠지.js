// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split("\n");
let N = input.shift();

for (let i = 0; i < input.length; i++) {
  let scores = input[i].split(" ");
  let stundentNum = scores.shift();
  let sum = 0;
  let student = 0;
  for (let j = 0; j < scores.length; j++) {
    sum += Number(scores[j]);
  }
  let average = sum / stundentNum;
  scores.map((x) => {
    if (+x > average) {
      student++;
    }
  });
  let ratio = (student / stundentNum) * 100;
  console.log(ratio.toFixed(3) + "%");
}
