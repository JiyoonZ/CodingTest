
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
-512`;
input = input.toString().split('\n').map(v=>+v);
const N = input.shift();
let count = count+N;

console.log(N)
console.log(input)
