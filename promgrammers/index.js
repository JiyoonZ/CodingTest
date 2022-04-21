// 지시사항을 참고하여 코드를 작성하세요.
let pyramid = function(x) {
  let tmp = 1;
  let empty = 1;
  let star = '*';
  let result = '';
  for(let i=0; i<x; i++) {
    result += '&nbsp'.repeat(x-empty)+star.repeat(tmp)+'<br>';
    tmp+=2;
    empty++;
  }
  return document.write(result);
}
console.log(pyramid(2));