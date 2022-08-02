function solution(nums) {
  // 가져갈수있는 포켓몬의 갯수
  let cnt = nums.length / 2;
  let tmp = [];
  nums.map((x) => {
    if (!tmp.includes(x)) {
      tmp.push(x);
    }
  });

  if (cnt <= tmp.length) {
    return cnt;
  } else if (cnt > tmp.length) {
    return tmp.length;
  }
}

const nums = [3, 3, 3, 2, 2, 2];
solution(nums);
