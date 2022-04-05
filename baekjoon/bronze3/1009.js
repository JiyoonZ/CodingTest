//const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.trim());
// const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

let input = `5
1 6
3 7
6 2
7 100
9 635
`;
input = input.toString().trim().split("\n");
const N = input.shift();

const result = input.map(v => {
  const [a, b] = v.split(' ');  
    
  let pow = 1;

  for (let j = 0; j < b; j++) {
    pow = (pow * a) % 10;
  }
    
  return pow === 0 ? 10 : pow;
});  

console.log(result.join("\n"));
console.log(N);
console.log(input);







