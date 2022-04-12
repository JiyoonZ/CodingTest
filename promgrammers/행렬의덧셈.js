let arr1 = [[1,2],[2,3]];
let arr2 = [[3,4],[5,6]];
let format = arr1;
let result = [];
let tmp = [];
let cnt = 0;
for(let i=0; i<arr1.length; i++) {
  for(let j=0; j<arr1[i].length; j++) {
    
    format[i][j] = arr1[i][j] + arr2[i][j];
    cnt++;
    
  }
  
}
console.log(format);