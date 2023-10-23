let input = `7 7 7
6 5 4
3 2 5
6 2 6
0 0 0`;
input = input.split("\n");

for (let i=0; i<input.length; i++) {
    let sort_nums = input[i].split(" ").map(item=>Number(item)).sort((a,b)=>a-b);
    if(sort_nums[0] == 0 && sort_nums[1] == 0 && sort_nums[2] == 0){
        break;
    }
    if(sort_nums[0] == sort_nums[1] && sort_nums[1] == sort_nums[2] && sort_nums[2] == sort_nums[1] ){
        console.log("Equilateral");
    }
    else if(sort_nums[2] >= sort_nums[0]+sort_nums[1]){
        console.log("Invalid");
    }
    else if(sort_nums[0] == sort_nums[1] || sort_nums[0] == sort_nums[2] || sort_nums[1] == sort_nums[2]){
        console.log("Isosceles");
    }
    else if(sort_nums[0] != sort_nums[1] && sort_nums[1] != sort_nums[2] && sort_nums[2] != sort_nums[0]){
        console.log("Scalene");
    }
}

