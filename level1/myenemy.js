"use strict";

function solution(a, b) {
  return a.reduce(
    (accumulator, currentValue, currentIndex) =>
      (accumulator += currentValue * b[currentIndex]),
    0
  );
}

// function solution(a, b) {
// 	return a.reduce(function (accumulator, currentValue, currentIndex) {
// 	  return (accumulator += currentValue * b[currentIndex]);
// 	}, 0);
//   }
