console.log(solution(51));

function solution(n) {
  return findFibonachi(n);
}

function findFibonachi(n) {
  const memorie = [0, 1];
  for (let i = 2; i <= n; ++i) {
    if (memorie[i] == undefined) {
      memorie[i] = (memorie[i - 1] + memorie[i - 2]) % 1234567;
    }
  }
  return memorie[n];
}
