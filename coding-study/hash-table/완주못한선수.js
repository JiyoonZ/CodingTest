// 완주는 단 1명 제외하고 항상 한다
// 이름은 1~20개의 알파벳으로
// 동명이인 존재 가능

// 효율성 테스트 시간초과
// function solution(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     let index = participant.indexOf(completion[i]);

//     participant[index] = -1;
//   }
//   let result = participant.filter((x) => x !== -1);
//   return result[0];
// }

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];
solution(participant, completion);
