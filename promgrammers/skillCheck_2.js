
function solution(s) {
    var answer = '';
    let result = s.split(' ').sort((a,b) => a-b);
    let tmp = [];
    tmp[0] = result[0];
    tmp[1] = result[result.length-1];
    return tmp.join(' ');
}