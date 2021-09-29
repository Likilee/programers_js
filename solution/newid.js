"use strict";

function solution(new_id) {
  let answer = step1(new_id);
  answer = step2(answer);
  answer = step3(answer);
  answer = step4(answer);
  answer = step5(answer);
  answer = step6(answer);
  answer = step7(answer);
  return answer;
}

function step1(string) {
  return string.toLowerCase();
}

function step2(string) {
  let result = "";
  for (let i = 0; i < string.length; ++i) {
    const c = string.charAt(i);
    if (
      (c >= "a" && c <= "z") ||
      (c >= "0" && c <= "9") ||
      c === "-" ||
      c === "_" ||
      c === "."
    ) {
      result += c;
    }
  }
  return result;
}

function step3(string) {
  let result = "";
  let dotSequence = false;
  for (let i = 0; i < string.length; ++i) {
    const c = string.charAt(i);
    if (c === ".") {
      if (dotSequence === true) continue;
      dotSequence = true;
    } else dotSequence = false;
    result += c;
  }
  return result;
}

function step4(string) {
  if (string.charAt(string.length - 1) === ".") {
    string = string.slice(0, -1);
  }
  if (string.charAt(0) === ".") {
    string = string.slice(1);
  }
  return string;
}

function step5(string) {
  if (string === "") string = "a";
  return string;
}

function step6(string) {
  string = string.slice(0, 15);
  return step4(string);
}

function step7(string) {
  const len = string.length;
  if (len < 3) {
    const lastChar = string.charAt(len - 1);
    for (let i = 0; i < 3 - len; ++i) string += lastChar;
  }
  return string;
}
