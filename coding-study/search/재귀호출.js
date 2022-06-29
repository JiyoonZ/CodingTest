const getCombinations = function (arr, selectNum) {
	// 결과값을 넣을 빈배열
  const results = [];
	/**
     알고리즘의 개념을 먼저 익히고 관련 문제를 풀어 팀원들에게 설명하고 질의응답을 하는 과정을 통해 제대로 공부할 수 있었고,
     무작정 코딩테스트를 풀던 이 전과는 달리 해당문제를 풀기위해 사용할 알고리즘이 무엇인지 고민할 수 있게 되었습니다! 
     * 
     */
	// 매개변수로 오는 selectNum 이 1이되는순간 조합 끝 해당 값 반환 
  if (selectNum === 1) return arr.map((value) => [value]);
	
	// fixed => 탐색하는 원자 하나씩 고정값으로 두고 조합 탐색하기 
  arr.forEach((fixed, index) => { // 각각의 원자와, 인덱스 
		// 예를들어 [1,2,3,4,5] => rest = [2,3,4,5]
    const rest = arr.slice(index + 1);
		// 재귀호출 => selectNum이 1이 될때까지 => rest 배열을 계속 가져가서 조합
    const combinations = getCombinations(rest, selectNum - 1);
		// 
        const attached = combinations.map((combination) => [fixed, ...combination]);
        console.log(combinations.map(el => [fixed, ...el]));
        console.log(attached);
    results.push(...attached);
  });
  console.log(results)
  return results;
};

console.log(getCombinations([1,2,3,4,5,6,7], 6));
  