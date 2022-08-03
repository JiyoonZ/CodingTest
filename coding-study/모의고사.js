// 프로그래머스 lv1

function solution(answers) {
  const num1 = [1, 2, 3, 4, 5]; //5
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5]; //8
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10

  let score = [0, 0, 0]; // 3명의 점수
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === num1[i % 5]) score[0]++;
    if (answers[i] === num2[i % 8]) score[1]++;
    if (answers[i] === num3[i % 10]) score[2]++;
  }
  const result = [];
  const maxScore = Math.max(...score);

  if (maxScore === score[0]) result.push(1);
  if (maxScore === score[1]) result.push(2);
  if (maxScore === score[2]) result.push(3);
  return result;
}

const answers = [1, 2, 3, 4, 5];

solution(answers);
