let inputs = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.split('\n');

inputs = inputs.map(el => el.split(' '))
console.log(inputs)



// const answer = inputs.map((input) => {
//   console.log(input)
//   const res = [];
//   for(let a of combinations(inputs, 6)) {
//     res.push(a);
//   }
//   return res;
// })
console.log(combinations(inputs,0));
// 한줄씩 배열이 들어온다. 
function combinations (elements, selectNumber) {
  // elements.shift();
  elements = elements.map(n => +n)
  return elements
  // for(let i=0; i<elements.length; i++)
}
