let input1 = 12;

for (let i = 1; i < input1; i++) {
  if (input % i === 1) {
    console.log(i);
    return;
  }
}

let num = 2;

function solution(num) {
  var answer = "";
  if (num % 2 === 0) answer = "Even";
  else answer = "Odd";
  return answer;
}

console.log(solution(num));

let input = "pPoooyY";
// let input = "ssooooOOO";

function solution(s) {
  // var answer = true;
  let tmp = s.toLowerCase().split("p").length;
  let tmpX = s.toLowerCase().split("y").length;
  return tmp === tmpX ? true : false;
}

console.log(solution(input));
