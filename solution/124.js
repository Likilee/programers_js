"use strict";

let temp = "/";
if (temp <= "0") console.log("right!");
console.log(String.fromCharCode(temp.charCodeAt(0) - 1));
console.log(Number(temp.toString(3)));
for (let value = 1; value < 500; ++value) {
  console.dir(makeOneTwoThree(value));
}

function solution(n) {
  return answer;
}

function makeOneTwoThree(value) {
  let ternary = value.toString(3).split("");
  const size = ternary.length;
  for (let i = size - 1; i > 0; --i) {
    const currentChar = ternary[i];
    const frontChar = ternary[i - 1];
    if (currentChar <= "0") {
      ternary[i - 1] = decrease(frontChar);
      ternary[i] = increase3(currentChar);
    }
  }
  for (let i = 0; i < size; ++i) {
    if (ternary[i] == "3") {
      ternary[i] = "4";
    }
  }
  if (ternary[0] == "0") ternary.splice(0, 1);

  return ternary.join("");
}

function decrease(char) {
  return String.fromCharCode(char.charCodeAt(0) - 1);
}

function increase3(char) {
  return String.fromCharCode(char.charCodeAt(0) + 3);
}
