// 전처리
const [n, ...arr] = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`
  .toString()
  .trim()
  .split("\n");

// input을 map을 사용할 수 있도록 array 형태로 만듦
let clothes = [];
// arr의 첫 값은 숫자기 때문에 count++를 해도 0부터 들어가도록 초기값을 -1로 초기화 함
let count = -1;

// 1을 곱했을 때 값이 NaN이라면 옷이 담겼기 때문에 공백에 따라 split해준다
for (let i = 0; i < arr.length; i++) {
  if (isNaN(arr[i] * 1)) {
    clothes[count].push(arr[i].split(" ")); // 숫자가 아닐 때
  } else {
// 만약 1을 곱한 값이 숫자라면 배열을 push하고 count에 1을 더한다
    clothes.push([]);
    count++;
  }
}
// console.log(clothes);
// 결과
// [  
//   [ 'hat', 'headgear' ],
//   [ 'sunglasses', 'eyewear' ],
//   [ 'turban', 'headgear' ]
// ]
// [ [ 'mask', 'face' ], [ 'sunglasses', 'face' ], [ 'makeup', 'face' ] ]
// 코드 풀이 
for (let i of clothes) {
  const arr = i;
// 해시 테이블을 만들기 위해 Map을 이용함
  let key = new Map();
  for (let j = 0; j < arr.length; j++) {
// 위 전처리의 결과를 보면 배열의 두 번째 값이 옷의 장르임을 알 수 있음
// 만약 key에 해당 장르가 존재하지 않는다면 1을 넣어줌
    !key.has(arr[j][1])
      ? key.set(arr[j][1], 1)
// 만약 key에 해당 장르가 이미 존재한다면 값을 가져와 +1을 해줌
      : key.set(arr[j][1], key.get(arr[j][1]) + 1);
  }
  console.log(key);

  let answer = 1;
// map의 결과는 오브젝트 형식으로 나온다
  for (let a of key.values()) {
// a에 +1을 해서 곱하는 이유:
// 예를들어 헤드웨어 종류가 2가지라면 1번 모자, 2번 모자, 그리고 아무것도 안 쓴 경우를 포함해야 해서
    answer *= a + 1; 
  }

// -1을 해준 이유: 모두 아무것도 입지 않을 경우를 빼줌
  console.log(answer - 1);
}