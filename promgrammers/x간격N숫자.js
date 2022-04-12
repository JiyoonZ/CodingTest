function solution(x, n) {
  let a = x;
  let b = n;
  let result = [];
  for (let i=1; i<=b; i++) {
    result[i-1] = a*i;
  }
 return result;
}
console.log(solution(2,4));