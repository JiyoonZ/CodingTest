// let bfs = function (node) {
//   // TODO: 여기에 코드를 작성합니다.

//   let values = [node.value] //그 값이 들어가고
//   let queue = [node] //노드 자체가 들어간다

//   while(queue.length!==0){
//     let search = queue.shift(); //탐색 시작할 노드 하나 빼서
//     for(let i=0; i<search.children.length; i++){ //그 노드의 children 배열을 순회
//         values.push(search.children[i].value) //값은 values에 밀어넣고
//         queue.push(search.children[i]) //children노드는 또 탐색을 해주기 위해 queue에 넣어준다
//     }
//   }
//   return values;
   
// };
