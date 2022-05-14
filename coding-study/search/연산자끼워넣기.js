let input =`5
5 4 3 2 1
1 1 1 1`
// 문제 주의사항 연산기호의 갯수는 무조건 N -1 이다. 
// 연산의 순서
// +, -, * , /
input = input.split('\n');
// 수의 갯수
const N = input[0]
// 각각의 주어진 숫자
const nums = input[1].split(' ').map(x=>+x)
// 연산식의 각각의 갯수
const operators = input[2].split(' ').map(x=>+x)

function solution(N, nums, operators) {
  // 연산기호의 횟수를 
  // 연산기호로 횟수만큼 펼쳐놓은 배열을 oper 에 담기
  const oper = changeOper(operators);
  console.log(oper);
  
  // 방문여부를 체크 => 위에서 chageOper함수를 통해 만든 oper배열의 길이만큼 배열생성 > 모두 false로 채워주기
  const visited = new Array(oper.length).fill(false);
  // console.log(visited);
  
  let answer = [];
  let results = [];
  dfs(0);
  
  //정답 출력
  console.log(Math.max(...results));
  console.log(Math.min(...results));
  console.log(results)
  
  
  // 2.
  // 깊이우선 완전탐색 DFS로 풀기
  function dfs(cnt) {
    // cnt 
    // 연산기호를 넣을수 있는 길이는 "주어진 숫자의 개수 -1"
    if(cnt === N-1) {
      results.push(calc(nums,answer));
    }
	   // depth 마다 근접한 모든 노드를 방문하도록한다.
		// 깊이마다 재귀호출로 모든 노드 탐색 -> 반복...

    //===============================
    //  for 문은 순서대로 노드를 지정
    // 재귀호출은 자식노드를 모두 탐색으로 보기

    // 연산 기호를 넣을 수 있는 길이만큼 for문 돌리기
    console.log(answer);
    for(let i=0; i< N-1; i++) {
      // 방문한적이 있다면 for문 진행
      // 즉 i번째기호를 사용했다면 패스하기 
      if(visited[i]) continue;
      // 방문한적이없다면 -> 즉 i번쨰 기호를 사용해준적이 없다면
      // 해당 연산기호를 answer 에 넣어준다. 
      visited[i] = true;
      answer.push(oper[i]);
      console.log(answer);
      // 재귀호출 
      // (if문 조건에 걸릴때까지 호출하기)
      // 재귀호출로 자기의 자식 노드를 전부 호출 탐색
      dfs(cnt+1);
			// 더이상 자식 없다면
      // 하나씩 빼주기 
      visited[i] = false;
      answer.pop();
    }
  }


  //3. 
  function calc(nums, operators) {
    //주어진 첫번째 숫자부터 연산시작
    let tmp = nums[0];
    for(let i=0; i<operators.length; i++) {
      // 
      // 계산해주는 함수의 인자로 첫번째값, 두번째값, 연산자 넣기
      // 그값을 다시 tmp로 저장하고 위의 과정 반복! (operators 배열의 길이만큼 반복)
      tmp = calcWorking(tmp, nums[i+1], operators[i]);
      console.log(nums, operators,tmp);
    }
    return tmp;
  } // calc

  // 4.
  // 실제로 계산이 이뤄지는 함수
  // 나누기 조건 : 몫만 가져온다.(나머지는 버리기), 음수라면 절대값으로 바꿘후 나누고 다시 음수로 바꿔주기 
  function calcWorking(a, b, operator) {
    switch(operator) {
      case '+' :
        return a + b;
      case '-' :
        return a - b;
      case 'x' :
        return a * b;
      case '%' : 
      // a가 음수라면 a의 절대값으로 b를 나눈후 다시 음수로
      // 연산한 임의의 숫자 a가 음수일수도 있으므로 절대값으로 바꿔준다.
      a = Math.abs(a);
      if(a<0) {
          return -Math.floor(a/b)
        };
        // 음수가 아니라면 그냥 나누기 
        return Math.floor(a/b)
    }
  } // calcWorking


  // 1. 
  //입력받은 연산자의 갯수를 연산자로 바꿔주는 함수
  //[1,1,1,1] => ['+','-','*','/']
  function changeOper(operators) {
    // 연산자 기호를 넣어줄 배열
    const operator = [];
    for(let i=0; i<operators.length; i++) {
      let opr = '';
      //문제 조건에 주어진 순서대로 +,-,*,%
      if(i ===0) opr = '+'
      else if(i ===1) opr = '-';
      else if(i ===2) opr = 'x';
      else if(i ===3) opr = '%';

      //입력받은 연산자의 갯수만큼 빈배열 operate에 넣어주기 
      // operators[i] => 입력받은 연산기호의 횟수
      // [2,0,1,3]  => ['+','+','*','%','%','%']
      for(let j=0; j<operators[i]; j++) {
          operator.push(opr);
      }
    }
    // 연산자 기호로 이루어진 배열 operator 반환
    return operator
  } //changeOper


}

solution(N,nums,operators);