let input =`4
3 4 5 6
1 1 1 0`

// 연산의 순서
// +, -, * , /
input = input.split('\n');
const N = input[0]
const nums = input[1].split(' ').map(x=>+x)
const operators = input[2].split(' ').map(x=>+x)

function solution(N, nums, operators) {

  const oper = changeOper(operators);
  // console.log(oper);
  // 방문여부를 체크 => 위에서 chageOper함수를 통해 만든 oper배열의 길이만큼 배열생성 > 모두 false로 채워주기
  const visited = new Array(oper.length).fill(false);
  // console.log(visited);
  
  let answer = [];
  let results = [];
  dfs(0);

  console.log(Math.max(...results));
  console.log(Math.min(...results));
  console.log(results)
  
  // 4.
  // 모든 조건을 확인하는 함수
  function dfs(cnt) {
    // cnt가 주어진 연산기호의 갯수가 되었을때 (주어진 숫자보다 연산기호는 1개 적기때문에)
    // 재귀호출을 반복하면서 모든 연산자가 채워졌을때 계산해주기 
    // 계산해준값 results 함수에 넣어주기
    if(cnt === N-1) {
      results.push(calc(nums,answer));
    }

    // 연산기호가 들어갈 수 있는 자리의 갯수만큼 탐색하기
    for(let i=0; i< N-1; i++) {
      //만약 방문한적있다면 for문 계속진행
      //첫번째 재귀호출로 이코드 실행되었다면
      // 0번째 visited는 true 이므로 for문 으로 다시 돌아가기
      if(visited[i]) continue;
      // 방문한적없는경우

      //경우의 수 세기
      // 첫번째 자리부터 oper의 첫번째 배열부터 answer에 넣어두고 경우수 체크하기 
      visited[i] = true;
      answer.push(oper[i]);
      // 재귀호출 > 
      // 연산기호 oper의 길이만큼 경우수를 구할때까지 재귀호출.
      dfs(cnt+1);
      // 모든 경우의 수를 다 찾았으면 false로 바꿔주기
      visited[i] = false;
      console.log(answer)
      answer.pop();
    }
  }


  //2. 
  function calc(nums, operators) {
    //주어진 첫번째 숫자부터 연산시작
    let tmp = nums[0];
    for(let i=0; i<operators.length; i++) {
      // 
      // 계산해주는 함수의 인자로 첫번째값, 두번째값, 연산자 넣기
      // 그값을 다시 tmp로 저장하고 위의 과정 반복! (operators 배열의 길이만큼 반복)
      tmp = calcWorking(tmp, nums[i+1], operators[i]);
    }
    return tmp;
  } // calc

  // 3.
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
  //입력받은 갯수를 연산자로 바꿔주는 함수
  //[1,1,1,1] => ['+','-','*','%']
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
      for(let j=0; j<operators[i]; j++) {
          operator.push(opr);
      }
    }
    // 연산자 기호로 이루어진 배열 operator 반환
    return operator
  } //changeOper


}

solution(N,nums,operators);
