// 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수
// 10 , 12 > true // 11, 13 > false
function solution(x) {
  let tmp = x.toString().split(''); //tmp =[1,0]
  let result = 0;
  for(let i=0; i<tmp.length; i++) {
      result += Number(tmp[i]);
  }
  if (x % result === 0 ) {
      return true;
  } else {
      return false;
  }
  
}
console.log(solution(10));