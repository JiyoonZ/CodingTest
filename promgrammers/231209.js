function solution(message) {
    var answer = 0;
    message.replace('"', "");
    // console.log(message);
    for (let i = 0; i < message.length; i++){
        answer += 2;
    }    
    return answer;


}
//양꼬치는 1인분에 12,000원, 음료수는 2,000원
const message = "happy birthday!";
// console.log(num_list);
// solution(numLog)
console.log(solution(message));