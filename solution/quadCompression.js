//작은 물방울이 큰 물방울에 들어가듯
//merge 안된 청크 -> 갯수 다 카운트 후 nothing 정의
//merge 된 청크 -> 다음 압축 단계로 숫자 이동
//

const ZERO = 0;
const ONE = 1;
const EMPTY = -1;
const arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

const count = [0, 0];
compressArr(arr, count);
console.log(arr);
console.log(count);

let col = 0;
let row = 0;

function compressArr(arr, countArr) {
  //위에 두줄 부터 압축
  const size = arr.length;
  let startCol = 0;
  //   let canCompress = ;
  for (let i = 0; i < size / 2; ++i)
  {
	if (canCompress(arr, startCol))

  }

  //청크 내의 값이 모두 같은지 같으면 0,1 리턴 다르면 -1 리턴

}

function compress(arr, startCol) {
  let beforeValue = arr[0][startCol];

  for (let row = 0; row < 2; ++row) {
    let col = startCol;
    for (let j = 0; j < 2; ++j) {
      if (beforeValue != arr[row][col]) {
        return -1;
      }
    }
  }
  return true;
}
//
//   arr.shift();
//   arr.shift();
//   arr.push([EMPTY, ZERO]);
//   arr.shift();
//   arr.shift();
//   arr.push([EMPTY, EMPTY]);
//   countArr[0] += 3;
//   countArr[1] += 9;

function solution(arr) {
  var answer = [];
  return answer;
}

