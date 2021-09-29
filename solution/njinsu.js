// 2<= n 진법 1<= 16
// 0<= t 개  <= 1000
// 2<= m 참여인원 <= 100
// 1<= p 내 순서 <= m

console.log(solution(16, 10, 5, 4));

function solution(n, t, m, p) {
  const maxSize = t * m;
  let nums = "";

  for (let i = 0; nums.length < maxSize; ++i) {
    nums += i.toString(n);
  }
nums.repeat
  let answer = "";
  while (t--) {
    answer += nums[p - 1];
    p += m;
  }
  return answer.toUpperCase();
}
