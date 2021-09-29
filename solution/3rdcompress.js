"use strict";

const dictionary = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

function solution(msg) {
  var answer = [];
  recursive(msg, 0, 2, answer);
  return answer;
}

function recursive(msg, start, end, compress) {
  const sub = msg.substring(start, end);
  if (sub.length < end - start) {
    compress.push(dictionary[sub]);
    return;
  }
  if (dictionary[sub] == undefined) {
    compress.push(dictionary[msg.substring(start, end - 1)]);
    dictionary[sub] = Object.keys(dictionary).length + 1;
    recursive(msg, end - 1, end + 1, compress);
  } else {
    recursive(msg, start, end + 1, compress);
  }
}

// const msg = "KAKAO";
// console.log(solution(msg));
// substring 을 사용하지 않고 풀면 속도가 훨씬 빨라질듯
