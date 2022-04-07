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

// function solution(id_list, report, k) {
//   const tmpList = new Array(id_list.length);
//   tmpList.fill(0);
//   const report_list = {};

//   //사용자리스트를 객체의 key값으로 넣기
//   id_list.map((user) => {
//     report_list[user] = [];
//   });

//   // 리포트에서 신고한사람을 value로 넣기
//   report.map((user) => {
//     const [user_id, report_id] = user.split(' ');
//     if (!report_list[report_id].includes(user_id)) {
//       report_list[report_id].push(user_id);
//     }
//   });

//   for (const key in report_list) {
//     if (report_list[key].length >= k) {
//       //이용정지 유저
//       report_list[key].map((user) => {
//         //신고한 홋수를
//         tmpList[id_list.indexOf(user)] += 1;
//       });
//     }
//   }
//   console.log(tmpList);
// }

// const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
// const report = [
//   'muzi frodo',
//   'apeach frodo',
//   'frodo neo',
//   'muzi neo',
//   'apeach muzi',
// ];
// const k = 2;

// solution(id_list, report, k);
