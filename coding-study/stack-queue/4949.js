//백준 4949번 균형잡힌 세상

let input = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`.split("\n");
//엔터를 기준으로 한줄씩 배열의 원자로

// 여는 소괄호 여는 대괄호를 만났다면 push
// 다는 소괄호 닫느 대괄호를 만났다면 pop
const open = ['(', '['];
const close = [')', ']'];
// 괄호들을 넣어놓고 비교할 용도로 사용
let stack = [];
// 결과값을 출력할 용도의 배열
let result = [];

//입력의 종료조건으로 맨 마지막에 점은 빼준다.
input.pop();

//input의 원자에 하나씩 접근하기 
input.forEach((ele) => {

  let isBool = false;

	// 원자 하나는 문장이므로 한글자씩 접근하기 
  for (let i = 0; i < ele.length; i++) {
		// 해당 문장에 여는 괄호가 포함되어있다면 -> stack 이라는 빈배열에 넣어주기
    if (open.includes(ele[i])) stack.push(ele[i]);
		
		// 해당 문장에 닫느 괄호가 포함되어있다면 
		//    -> 1. 여는괄호의 종류가 닫는 괄호의 종류와 같지않다면 no!
    else if (close.includes(ele[i])) {
			 // 같은 종류끼리 인덱스번호 같기때문에 "close.indexOf(ele[i])"
      if (stack.pop() !== open[close.indexOf(ele[i])]) {
				// 종류가 달라서 즉, 균형잡힌 문자열이 아니면 결과를 출력할 배열에 no을 push
				// isBool 값을 true로 바꿔준뒤 for문을 탈출한다. 
        result.push('no');
        isBool = true;
        break;
      }
    }
  }
	// isBool이 true가 아니라면 즉 false 라면 (false라면 균형잡힌 문자열이였다는 의미) 
  if (!isBool) {
		// 괄호가 없는게 아니라면 yes를 push 괄호가 없는 문자열이였다면 no를 push
    if (stack.length === 0) result.push('yes');
    else result.push('no');
  }
});

console.log(result.join('\n'));