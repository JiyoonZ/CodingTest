// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.toString().split('\n');
// 총 컴퓨터 갯수
let computerCnt = Number(input.shift());
// 연결된 쌍의 개수
let edge = Number(input.shift());
// +1 을 하는 이유는 from , to에 할당될 컴퓨터 번호가 
// 1부터 시작하는 숫자이기 때문에 (마지막 배열의 속성을 위해서 )
let connections = [...Array(computerCnt + 1)].map(e => []);
for(let i = 0 ; i < edge; i++){
  // 1 2 를 split으로 나누고 from, to 에 각각 할당
  let [from, to] = input[i].split(' ').map(Number);
  connections[from].push(to);
  connections[to].push(from);
}
console.log(connections);
// 출력해보면 index 번호 그대로 컴퓨터라고 치고 연결된 컴퓨터 번호가 배열로 추가되어있음 

console.log(bfs(connections, 1).length - 1);

// 너비 우선 탐색 
function bfs (connections, startNode) {
  // 방문 여부를 위한 빈배열 2개
  const visited = [];
  let needVisit = [];

  
  needVisit.push(startNode);
  // needVisit가 빌때까지 반복문 돌기 
  while(needVisit.length !==0){
    // 방문이 필요한 노드를 빼서 할당
    const node = needVisit.shift();
    // 해당 노드를 탐색한 적 없다면
    if(!visited.includes(node)){
      //방문으로 바꿔주고
      visited.push(node);
       console.log('needVisit', needVisit, visited)
       // 방문한 노드에 연결되어있는 컴퓨터를 가져와서 방문이 필요한 needVisit에 할당 
       needVisit = [...needVisit, ...connections[node]];
      }
      // 방문한적 있으면 그냥 needVisit에서 빼기만하고 다음 반복문
      console.log('needVisit2', needVisit, visited)
  }
  console.log(visited)
  return visited;
};

