// 백준 2504번
// let input =`((()))[()]`;
let input =`(()[[]])([])`;
const open = ['(', '['];
const close = [')', ']'];

input = input.toString().split('');
let stack = [];
let result = 0;
let cnt = 1;
let answer = 0;

for(let i=0; i<input.length; i++) {
  // 여는 괄호를 포함되었을떄
  if(input[i].includes(open[0]) || input[i].includes(open[1])) {
    // 
    stack.push(input[i]);
  } else if(input[i].includes(close[0]) || input[i].includes(close[1])) {
      if(stack.pop() === open[close.indexOf(input[i])]) {
        if(stack.length===0){
          input[i] ===')' ? result *=2 : result *=3;
          answer += result;
          result = 0;
        }else if(input[i-1].includes(')') || input[i-1].includes(']')) {
          if(input[i-1] === input[i]) {
            input[i]===')' ? result += cnt*2 : result += cnt*3;
            cnt++;
            
          } else{
            input[i]===')' ? result += cnt*2 : result += cnt*3;
            cnt++; //갯수가 증가 
          }
         
        } else {
          cnt=1;
          input[i]===')' ? result += cnt*2 : result += cnt*3;
          

        }
      } else{
        result = 0;
      }
  }
}

console.log(answer);

