//let input = require('fs').readFileSync('/dev/stdin');
let stdin = `3
2 2
1 5
13 29`;
stdin = stdin.toString().split("\n");
// TC 갯수
let caseNum = stdin[0];

for(let testCase = 1; testCase <= caseNum; testCase++){
    let testStr = stdin[testCase].split(" ");
    let n = parseInt(testStr[0]);
    let m = parseInt(testStr[1]);
    let count = 0;

    //mCn을 구한다
    //n+1Cr+1 = nCr + nCr+1 이므로 메모이제이션을 이용한다.
    let visited = [];
    for(let i = 0; i < m+1; i++){
        let newAry = new Array(n+1).fill(0);
        visited.push(newAry);
    }

    

    function combination(n, r){
        //조합에서 1이 나오는 경우
        if(n === r || r === 0) {
            return 1;
        }

        //이미 탐색한 경우
        if(visited[n][r] !== 0) return visited[n][r];
        
        visited[n][r] = combination(n-1, r-1) + combination(n-1, r);
        return  visited[n][r];
    }

    console.log(combination(m,n));
}
