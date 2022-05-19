let input = `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`.split("\n");
const first_inputs = input[0].split(' ');
const chess = [];

console.log(input)

for(let i=0; i<first_inputs[0]; i++){
  chess.push(input[i+1]);
}
console.log(chess)

const white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

const answer = [];

for(let i=0; i<=first_inputs[0]-8; i++){
    for(let j=0; j<=first_inputs[1]-8; j++){
        let whitecnt = 0;
        let blackcnt = 0;
        
        for(let k=i; k<i+8; k++){
            for(let l=j; l<j+8; l=l+1){
                if(chess[k][l] !== white[k-i][l-j]) whitecnt++;
                if(chess[k][l] !== black[k-i][l-j]) blackcnt++;
            }
        }
        let min = whitecnt < blackcnt ? whitecnt : blackcnt;

        answer.push(min);
    }
}

console.log(Math.min(...answer));




