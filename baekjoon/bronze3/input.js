const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    console.log(line);
    rl.close(); // 한 줄 입력받고 종료
}).on('close', function(){
    process.exit();
})