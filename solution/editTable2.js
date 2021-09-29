// table OX,
// cursur // 현재 가리키고 있는 인덱스 값
// deleteStack // 삭제 요소 담겨있는 스텍

const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"];
const test = "D 2312421";

console.log(test.match(/\d+/)[0]);
console.log(solution(8, 2, cmd));

function solution(n, k, cmd) {
  const table = new Array(n);
  table.fill("O");

  let cursur = k;
  let count = 0;
  const deleteStack = [];

  for (const element of cmd) {
    if (element[0] == "D") {
      count += Number(element.match(/\d+/)[0]);
    } else if (element[0] == "U") {
      count -= Number(element.match(/\d+/)[0]);
    } else if (element == "C") {
      cursur = move(table, cursur, count);
      count = 0;
      table[cursur] = "X";
      deleteStack.push(cursur);
      cursur = move(table, cursur, 1);
    } else if (element == "Z") {
      //move
      cursur = move(table, cursur, count);
      count = 0;
      table[deleteStack.pop()] = "O";
    }
    // console.log(cursur);
  }
  return table.join("");
}

function move(table, cursur, n) {
  if (n < 0) {
    return up(table, cursur, -n);
  } else return down(table, cursur, n);
}

function down(table, cursur, n) {
  for (let i = 0; i < n; ++i) {
    ++cursur;
    while (table[cursur] == "X") {
      ++cursur;
    }
    if (table[cursur] == undefined) {
      cursur -= 2;
    }
  }
  return cursur;
}

function up(table, cursur, n) {
  for (let i = 0; i < n; ++i) {
    --cursur;
    while (table[cursur] == "X") {
      --cursur;
    }
  }
  return cursur;
}
