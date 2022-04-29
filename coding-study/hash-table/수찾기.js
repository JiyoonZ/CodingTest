const input = `5
4 1 5 2 3
5
1 3 7 9 5`.toString().trim().split('\n');
//N, A, M, B 변수에 라인별로 값 맵해주기
const [N, A, M, B] = input.map(v => v.split(" "));
// A
const array = new Set(A);
console.log(array);

const result = B.map(v => array.has(v) ? 1 : 0);

console.log(result.join("\n"));