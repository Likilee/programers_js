// n 은 10000 이하의 자연수
// a : 첫항 : 자연수
// c : 연속된 숫자 수 : 자연수
// (c^2 + (2a - 1)c) - 2n = 0
// 위 세 조건을 만족하는 c의 갯 수 구하기.

function solution(n) {
  let answer = 1;
  const half = n / 2;
  for (let i = 1; i < half; ++i)
    const discriminant = (2 * i - 1) ** 2 + 8 * n;
    if (discriminant >= 0) {
      const root = (-2 * i + 1 + Math.sqrt(discriminant)) / 2;
      if (Number.isInteger(root)) {
        ++answer;
      }
    }
  }
  return answer;
}