"use strict";

// min 배열 소팅, 맥스 배열 소팅.
function solution(A, B) {
  var answer = 0;
  A.sort(ascending);
  B.sort(descending);
  for (let i = 0; i < A.length; ++i) {
    answer += A[i] * B[i];
  }
  return answer;
}

function descending(a, b) {
  return b - a;
}

function ascending(a, b) {
  return a - b;
}
