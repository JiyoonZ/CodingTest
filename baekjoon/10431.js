// 반아이들 20명
// 같은키 없음 
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// input = input.split("\n");
// let N = input.shift();
// // console.log(input);

// for(let i=0; i<input.length; i++) {
//     let nums = input[i].split(" ").map(x=> +x);
//     let testNum = +nums.shift();
//     let cnt = 0;
//     for(let j=0; j<20; j++) {
//         for(let k=0; k<j; k++) {
//             if(nums[j] < nums[k] ) {
//                 cnt++;
//             }
//         }
//     }
//     console.log(testNum + " " + cnt);
// }


let inputFile = `4
1 900 901 902 903 904 905 906 907 908 909 910 911 912 913 914 915 916 917 918 919
2 919 918 917 916 915 914 913 912 911 910 909 908 907 906 905 904 903 902 901 900
3 901 902 903 904 905 906 907 908 909 910 911 912 913 914 915 916 917 918 919 900
4 918 917 916 915 914 913 912 911 910 909 908 907 906 905 904 903 902 901 900 919
1 19 20 17 18 15 16 13 14 11 12 9 10 7 8 5 6 3 4 1 2`;

const [P, ...input] = inputFile.toString().trim().split('\n').map((x)=>x.split(" ").map(Number));
// console.log(input);

for(let i=0; i<input.length; i++) {
    let testNum = input[i].shift();
    let nums = input[i];
    let cnt = 0;
    for(let j=0; j<20; j++) {
        for(let k=0; k<j; k++) {
            if(nums[j] < nums[k] ) {
                cnt++;
            }
        }
    }
    console.log(testNum + " " + cnt);
}  


// const countMoves = function countTotalMovesCallback(prevMoves, curHeight, index, heights) {
//     let moves = 0;
  
//     for (let i = 0; i < index; i += 1) {
//       if (heights[i] > curHeight) moves += 1;
//     }
  
//     return prevMoves + moves;
//   };
  
  
// const [P, ...tests] = input.split('\n').map((line) => line.split(' ').map(Number));

// // process
// const sol = [];
// tests.forEach((test) => {
// const [caseNo, ...heights] = test;
// const moveCnt = heights.reduce(countMoves, 0);
// sol.push(`${caseNo} ${moveCnt}`);
// });

//   // output
// console.log(sol.join('\n'));

