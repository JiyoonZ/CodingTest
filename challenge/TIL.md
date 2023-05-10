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
```
