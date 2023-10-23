//13 -> 13/6 = 2 / 6+6 => 12 => 2
//58 ->           => 5
// 1
// 1+1 1+6
// 
let N = 8;
let count = 1;
function waytoNum (num) {
    let init_num = num;
    let start_num =init_num+1;
    let end_num = start_num+(count*6)-1;
    init_num = end_num;
    if(N==1) {
        console.log(count);
        return;
    }else if(end_num >= N) {
        console.log(count+1);
        return;
    } else {
        count++;
        waytoNum(init_num);
    }

}
waytoNum(1);