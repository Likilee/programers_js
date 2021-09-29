function solution(files) {
  files.sort(comp);
  return files;
}

// -1 : a 먼저 b
// 0 : 둘이 완전 동일
// 1 : b 먼저 a
function comp(a, b) {
  const NUMBER = /(\D*)(\d{1,5})/;
  const aSplit = a.toLowerCase().match(NUMBER);
  const bSplit = b.toLowerCase().match(NUMBER);
  if (aSplit[1] < bSplit[1]) {
    return -1;
  } else if (aSplit[1] > bSplit[1]) {
    return 1;
  } else {
    if (Number(aSplit[2]) < Number(bSplit[2])) {
      return -1;
    } else if (Number(aSplit[2]) > Number(bSplit[2])) {
      return 1;
    }
  }
  return 0;
}

//TEST
const files = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];
console.log(solution(files));
