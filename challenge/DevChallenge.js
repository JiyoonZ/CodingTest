let str = "";
for (let i = 0; i < 5; i++) {
  str += "string";
}
// console.log(str);

let input = "aBcDeFg";
let result = "";
for (let x of input) {
  if (x === x.toUpperCase()) {
    result += x.toLowerCase();
  } else {
    result += x.toUpperCase();
  }
}
console.log(result);
