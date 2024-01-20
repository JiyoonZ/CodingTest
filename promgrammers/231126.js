function solution(num_list) {
    var answer = num_list;
    var lastNum = num_list[num_list.length - 1];
    var compareNum = num_list[num_list.length - 2];
    if (lastNum > compareNum) {
        answer.push(lastNum - compareNum);
    } else {
        answer.push(lastNum * 2);
    }
    return answer;
}
var num_list = [2, 1, 6];

console.log(solution(num_list));