// 번호의 길이와 상관없이 뒤에서 4자리만 보이도록 한다! 
//"027778888" > 	"*****8888"
let phone_number = '01033334444';

let num = '';
for(let i =0; i<phone_number.length; i++) {
  if(i>phone_number.length-5) {
      num += phone_number[i];
  } else {
    num += '*';
  }
}
console.log(num);