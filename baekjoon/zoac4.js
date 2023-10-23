let input = "8 8 2 3";
input = input.split(" ").map(item=>Number(item));
let H = input.shift();
let W = input.shift();
let M = input.shift();
let N = input.shift();

function countPerson(seat_count, interval_count) {
    
    if(seat_count % (interval_count+ 1) ==0 && interval_count !== 1) {
        // 나누어 떨어질때 
        return seat_count / (interval_count+1);
    } else {
        return Math.ceil(seat_count / (interval_count+1));
    }
}
console.log(countPerson(H,M));
console.log(countPerson(W,N));
console.log(countPerson(H,M)*countPerson(W,N));