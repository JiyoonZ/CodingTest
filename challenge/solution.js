let input = 12;
let tmp = Math.round(input / 2);

let answer = 0;
for (let i = 1; i <= input; i++) {
  if (input % i === 0) {
    console.log(i);
    answer += i;
  }
}
console.log(answer);
