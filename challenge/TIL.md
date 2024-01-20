### JS 기초문법 복기하기 💥

- for 문 사용

```js
str = "string";
for (let x of str) {
  // x 는 "string" 문자열 하나씩 탐색
}
```

- 연산자 및 숫자관련 메소드

```js
let a = 1.4;
let b = 1.6;
Math.ceil(a); // 2 올림 소수버리기
Math.floor(b); // 1 내림 소수버리기
Math.round(b); // 1 반올림한 수와 가장 가까운 정수 값을 반환
console.log(Math.max(a, b)); // 1.6
console.log(Math.min(a, b)); // 1.4

//그외
Math.random(); // 0.1~0.9 사이 난수
Math.sqrt(); // 제곱근값
Math.pow(a, b); // a^b 한 값
Math.abs(); // 주어진 숫자의 절대값을 반환
```

- 문자열 관련 메소드

```js
let str = "abcdeF";
str.toUpperCase();
str.toLowerCase();

// substring(시작인덱스 [, 종료인덱스 (생략시 끝까지)]);
str.substring(0, 1);
str.substring(2);


// 문자열 반복 
str.repeat(2); 
```


### every() 메소드
- 원소의 모든 값이 기준에 충족할때 true
  - 숫자를 문자열 배열로 만든후 해당 숫자가 5또는 0인 것만 있는지 검사 
```js
  let arr = String(i)
  console.log([...arr]);
  if (![...arr].every(x => x == 0 || x == 5)) {
      continue;
  }

```

### 문자열 > 배열, repeat 

```js

function solution(myString, n) {
    var answer = "";
    answer = [...myString].map((e) => {
        return e.repeat(n);
    }).join("");
    return answer;
}
```
