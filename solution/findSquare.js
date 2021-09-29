"use strict";

// W*H - H/W 올림 -> * W

// 기울기에 따라 W 당 나가리 구하는 문제
// 기울기당 나가리는 분자 + 분모 - 1,
// 2/1   2
// 1      1
// 1/3    3
// 1/2    2
// 4/3    6
// 5/3    7
// 7/3    9
// 8/3    10
// 10/3   12
// 11/3   13
// 3/2

// console.log(getGcd(8, 12));
function solution(w, h) {
  const gcd = getGcd(w, h);
  return w * h - (w / gcd + h / gcd - 1) * gcd;
}

function getGcd(w, h) {
  let a = Math.max(w, h);
  let b = Math.min(w, h);
  let n = 0;
  while ((n = a % b) != 0) {
    a = b;
    b = n;
  }
  return b;
}
