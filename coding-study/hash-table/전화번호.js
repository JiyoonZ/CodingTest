const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class hash {
  //해쉬 클래스 생성
  constructor() {
    this.newHash = []; //배열로 된 newHash 생성
  }

  add(value) {
    this.newHash.push(value); //해쉬에 새로운 값 넣는 함수  하다보니 필요없어서 쓰진않았음
  }

  sort() {
    //해쉬배열의 값을 문자열 길이순으로 정렬하는 함수
    this.newHash.sort(function (a, b) {
      return a.length - b.length;
    });
  }

  search() {
    //메인코드
    for (let i = 0; i < this.newHash.length - 1; i++) {
      //해쉬배열의 마지막-1번쨰 인덱스의 값(편의상 a라고 부를게요)을 골라서
      for (let j = i + 1; j < this.newHash.length; j++) {
        //골라진 값의 뒤의 인덱스 값(편의상  b라고 부를게요)과 비교하여
        if (this.newHash[j].includes(this.newHash[i])) return false; //b에 a값을 포함하고 있으면 false 반환
      }
    }
    return true; //다돌았는데 false가 반환되지 않았다면 true 반환
  }
}

rl.on("line", function (line) {
  let phonebook = new hash();
  phonebook.newHash = line.split(",");
  phonebook.sort();
  console.log(phonebook.search());
  rl.close();
});
rl.on("close", () => {
  process.exit();
});