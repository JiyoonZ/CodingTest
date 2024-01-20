function solution(my_string, letter) {
    var answer = '';
    console.log([...my_string].filter((e)=>e !== letter).join(""))
    return answer;
}
var my_string = "abcdef";
var letter = "f";
console.log(solution(my_string, letter));

