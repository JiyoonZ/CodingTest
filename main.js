// 코테 입력값 받기 방법1
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    console.log(line ,'테스트');
    rl.close(); // 한 줄 입력받고 종료
}).on('close', function(){
    process.exit();
})

// 코테 입력받기 방법2
let input = require('fs').readFileSync('/dev/stdin');
