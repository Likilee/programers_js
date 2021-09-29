"use strict";

console.log(solution(128, 1, 128));

function solution(n, a, b) {
  return (finder(a, b, 1));
}

function finder(a, b, count) {
  a = oddFix(a);
  b = oddFix(b);
  if (a !== b) {
    return finder(a / 2, b / 2, ++count);
  } else {
    return count;
  }
}

function oddFix(number) {
  if (isOdd(number)) {
    return number + 1;
  }
  return number;
}
function isOdd(number) {
  return number % 2;
}
