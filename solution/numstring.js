"use strict";
//숫자며 살려, 문자면 바꿔

const str = "one4oneseveneightoneonetwozero";
console.log(solution(str));

function solution(s) {
  return +s
    .replace(/zero/g, "0")
    .replace(/one/g, "1")
    .replace(/two/g, "2")
    .replace(/three/g, "3")
    .replace(/four/g, "4")
    .replace(/five/g, "5")
    .replace(/six/g, "6")
    .replace(/seven/g, "7")
    .replace(/eight/g, "8")
    .replace(/nine/g, "9");
}