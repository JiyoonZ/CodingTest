// ((([[[ 시작할때 무조건 num*=3 혹은 num*=2해주기
// ] 딱 완료되는 순간 누적값 그대로 넣기 
// 나머지는 바로 앞이 열리는 게 아닐경우 나누기 2 혹은 3을 해서 다시 1로 만들어주기...
let input =`(()[[]])([])`;
// let input =`((()))[()]`;
input = input.toString().split('');
console.log(input);

const solution = (input) => {
  const stack = [];
  let answer = 0;
  let num = 1;

  for (let i = 0; i < input.length; i++) {
    // push 되는 부분
    if (input[i] === "(" || input[i] === "[") {
      stack.push(input[i]);
      input[i] === "(" ? (num *= 2) : (num *= 3);
    }
    // pop 되는 부분
    else if (input[i] === ")" || input[i] === "]") {
      // 시작이 ( 또는 [ 가 아니면 무조건 잘 못된 배열이기 때문
      if (stack.length === 0) return 0;
      const pop = stack.pop();
      if (input[i] === ")") {
        if (pop === "(") {
          // 이전 문자열이 (인 경우 ()가 다 채워졌으므로 answer에 n 값을 더함
          if (input[i - 1] === "(") answer += num;
          // 괄호가 닫혔으니까 2로 나눠줌
          num /= 2;
        } else {
          // 올바르지 않은 배열 -> 배열이 닫혔는데 ( 또는 [만 남아있는 경우 ( [ )
          return 0;
        }
      } else {
			// () 와 같은 방식
        if (pop === "[") {
          if (input[i - 1] === "[") answer += num;
          num /= 3;
        } else {
          return 0;
        }
      }
    }
  }

  // 스택에 괄호가 남았다면 올바르지 못한 입력(짝이 맞으면 모두 pop() 되어야 함)
  if (stack.length !== 0) return 0;
  return answer;
};

console.log(solution(input));