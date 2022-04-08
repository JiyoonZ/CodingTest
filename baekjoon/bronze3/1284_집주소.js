input = `120
5611
100
0`;
input = input.toString().split('\n');

// 숫자1 : 2cm , 0은 4cm, 나머지는 3cm
// 디폴트 양쪽공백 1cm씩 총 2cm
// 주어진 숫자 (자릿수-1)*1cm

let tmp = [];
let space = 2;
let cnt = 0;

for (let i=0; i<input.length; i++) {
  if (input[i] === '0') break;
  space += input[i].length - 1;

  for (let j=0; j<input[i].length; j++) {
    if (input[i][j] === '1' ) {
      cnt += 2; 
    }else if (input[i][j] === '0') {
        cnt += 4;
    } else {
      cnt += 3;
    }
  }

  cnt += space;
  tmp.push(cnt);
  cnt = 0;
  space = 2;
}



console.log(input);
console.log(tmp.join('\n'));