//let input = require('fs').readFileSync('/dev/stdin');
// 18 => 5*2 , 3
// 4 => -1
// 6 => 3*2
// 9 => 3*3
// 11 => 5*1 + 3*2
// 15 => 5*3 
// 5로 나눴을때 몫이 있는지 검사 > N-몫 한값이 3으로 나누어 떨어지는지 검사
// 나누어 떨어지지 않는다면 3으로 나눴을때 나누어 떨어지는지 검사 
let input = 7;
input = Number(input);
// 횟수 새는 변수
let cnt = 0;
//loop 돌리기
while (true) {
  //5로 나누어 떨어지면 바로 그값 출력 
  if (input % 5 === 0) {
    console.log(input/5 + cnt);
    break;
  } else if (input <= 0) {
    console.log(-1);
    break;
  }
  // 5로 나누어 떨어지지 않는 다면 계속해서 3씩 빼고 다시 5로 나누어 떨어지는지 검사 
  input -= 3;
  cnt++;
}


//  가장 메모리 시간이 작았던 코드! 
// 처음 짯던 코드와 다른점  5로 나누어 떨어지다는 2번쨰 조건을 while 문 안으로 넣었다.
// let input = require('fs').readFileSync('/dev/stdin');
// input = Number(input);
// let cnt = 0;

// if (input % 5 === 0) {
//   cnt = input/5;
// } else {
//   // 18, 11 의 테스트 경우...5로 나눠질때까지 3을 빼주기 동시에 cnt에 3의 값 카운트!
//   while (true) {
//     input -= 3;
//     cnt++;
//     // 카운트에 5로 나눈 몫 담기
//     if (input % 5 === 0 ) {
//         cnt += input/5;
//         break;
//     } else if (input <= 0) {
//       cnt = -1;
//       break;
//     }
//   }
// }

// console.log(cnt);

// 답은 맞는데 계속 틀렸다고 뜨던 코드 > 5로 나누어 떨어지지 않아서 while 문 벗어나면 -1 
// 그아래 또 5로 나누어 떨어지는 조건을 넣어서 꼬인듯하다.. while 문 안으로 넣어서 break;시키면 맞는다. 
// if (input % 5 === 0) {
//   cnt = input/5;
// } else {
//   // 18, 11 의 테스트 경우...5로 나눠질때까지 3을 빼주기 동시에 cnt에 3의 값 카운트!
//   while (input % 5 !== 0) {
//     input -= 3;
//     cnt++;
//     if (input < 3) {
//       cnt = -1;
//       break;
//     }
//   }
//   // 카운트에 5로 나눈 몫 담기
//   if (input % 5 === 0 ) cnt += input/5;
// }

// console.log(cnt);



