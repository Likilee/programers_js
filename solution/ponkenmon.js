"use strict";

// 1. 포켓몬 종류 번호가 담긴 배열
// 2. 자바스크립트 세트
// const value = [1, 2, 3, 3];
// const obj = new Set(value);
// console.log(obj.size);
console.log(solution([3, 2, 1, 3]));

function solution(nums) {
  const reduction = new Set(nums).size;
  const half = nums.length / 2;
  return Math.min(half, reduction);
}
