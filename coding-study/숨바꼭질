const input = `5 17`;
// 수빈이 : N, 동생 K
// 즉 N 과 K 는 노드
const [N, K] = input.split(" ").map(Number);
// 방문 여부를 체크할 배열
const visit = Array(10001).fill(false);

function bfs(N) {
    // 노드를 탐색할 큐
    const queue = [];
    // 0 은 걸리는 초 (처음에는 0초로 세팅)
    queue.push([N, 0]);
    console.log(queue);
    
    // N는 수빈의 현재 위치 즉 현재 노드
    // 방문 하였기 때문에 현재 노드에 1값을 준다.
    visit[N] = 1;
    console.log(visit);
    
    // 큐의 길이는 Pop과 push를 반복 하면서 계속 줄어든다. 
    // 따라서 큐가 아예 빌때까지 탐색하면 모든 노드를 방문한것 
    while (queue.length) {
      console.log(queue);
      // 초기값: [[N:수빈의현재위치 ,0]]
      // location : N (입력받은 수빈이의 현재 위치)
      // count : 0 
      const [location, count] = queue.shift();
      console.log(location, count);
      // 수빈이의 위치와 동생의 위치가 같아지면 그대로 횟수(초)를 반환
      if (location === K) return count;

      //location 즉 N 의 인접노드는 문제의 지시항에 따라
      // 1. 현재위치-1 값
      // 2. 현재위치+1 값
      // 3. 현재위치 *2 값
      // for ..of  문을 사용해서 인접노드를 탐색하기 
      for (next of [location - 1, location + 1, location * 2]) {
        // 인접한 노드가 방문한적이 없다면 (방문을 했다면 그 노드값을 인덱스 번호로 가지는 해당 원자는 1임)
        // 그리고 인접한 노드가 0 보다 크고 100000보다 작다면
        if (!visit[next] && next >= 0 && next <= 100000) {
          // 위의 조건에 의해 방문한적이 없기때문에
          // 탐색후에 방문여부에 1를 지정
          visit[next] = 1;
          // 큐에 방문한적 없는 해당 노드값과, 횟수를 1번 증가시켜 push 해준다.
          // 여기서 count는 걸리는 초를 의미하기 때문에 방문한 노드의 인접 노드들은 다같은 count 값을 가진다.  
          // 인접노드마다의 값은 1초 이기 때문에 기존의 count에 1초씩만 더해준다.
          queue.push([next, count + 1]);
          // 또다시 for문을 돌면서 반복
        }
      }
    }
  }

  console.log(bfs(N));
// let visited = Array(100001).fill(false);
// let queue = [[N, 0]];
// let index = 0;
// while (true) {
//   if (!queue[index]) break;
//   let [location, count] = queue[index++];
//   if (visited[location]) continue;

//   visited[location] = true;
//   if (location === input[1]) {
//     console.log(count);
//     break;
//   }

//   if (location + 1 <= 100000) queue.push([location + 1, count + 1]);
//   if (location - 1 >= 0) queue.push([location - 1, count + 1]);
//   if (location * 2 <= 100000) queue.push([location * 2, count + 1]);
// }


// 방법2
// const visit = Array(100001).fill(false);

// function bfs(N) {
//     const queue = [];
//     queue.push([N, 0]);
//     console.log(queue);
    
//     visit[N] = 1;
    
//     while (queue.length) {
//       const [cur, time] = queue.shift();
//       if (cur === K) return time;
//       for (next of [cur - 1, cur + 1, cur * 2]) {
//         if (!visit[next] && next >= 0 && next <= 100000) {
//           visit[next] = 1;
//           queue.push([next, time + 1]);
//         }
//       }
//     }
//   }

//   console.log(bfs(N));
