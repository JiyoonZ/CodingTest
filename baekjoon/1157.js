// let input = "abcde22222abcde".toString().toUpperCase();
let input = "BBAAa".toString().toUpperCase();
// 배열을 순회하면서 알파벳인 경우에만 추출
let temp_arr = input.split("").map((item)=> {
    if(65<=item.charCodeAt(0) && item.charCodeAt(0)<= 90) {
        return item;
    } 
})

let arr = new Set(temp_arr);
arr = [...arr]

let max_cnt_str = '';
let max_cnt = arr.reduce((acc,curr)=> {
    let curr_cnt = input.split(curr).length;
    if(acc < curr_cnt) {
        acc = curr_cnt;
        max_cnt_str = curr;
    } else if (acc == curr_cnt) {
        curr =  "?"
    }
    return acc;
}, 0)

console.log(max_cnt_str);