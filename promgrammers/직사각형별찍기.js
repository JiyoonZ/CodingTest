const a = 5;
const b = 3;
let result = '';
for(let i=0; i<b; i++) {
  for(let j=0; j<a; j++) {
      result += '*';
  }
  console.log(result);
  result = '';
}
