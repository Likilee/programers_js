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
  const deleteStack = [];

  for (const element of cmd) {
    if (element[0] == "D") {
      const count = Number(element.match(/\d+/)[0]);
      for (let i = 0; i < count; ++i) {
        let tempCursur = cursur + 1;
        while (table[tempCursur] == "X") {
          ++tempCursur;
        }
        if (!(table[tempCursur] == undefined)) {
          cursur = tempCursur;
        }
      }
    } else if (element[0] == "U") {
      const count = Number(element.match(/\d+/)[0]);
      for (let i = 0; i < count; ++i) {
        let tempCursur = cursur - 1;
        while (table[tempCursur] == "X") {
          --tempCursur;
        }
        if (!(table[tempCursur] == undefined)) {
          cursur = tempCursur;
        }
      }
    } else if (element == "C") {
      table[cursur] = "X";
      deleteStack.push(cursur);
      if (cursur == n - 1) {
        --cursur;
      } else {
        cursur = down(table, cursur, 1);
      }
    } else if (element == "Z") {
      table[deleteStack.pop()] = "O";
    }
    // console.log(cursur);
  }
  return table.join("");
}

function down(table, cursur, n) {
  for (let i = 0; i < n; ++i) {
    let tempCursur = cursur + 1;
    while (table[tempCursur] == "X") {
      ++tempCursur;
    }
    if (!(table[tempCursur] == undefined)) {
      cursur = tempCursur;
    }
  }
  return cursur;
}
