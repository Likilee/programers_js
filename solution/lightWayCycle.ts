function solution(grid: string[]): number[] {
  const row = grid.length;
  const column = grid[0].length;

  function createPathMarker(row: number, column: number): any[] {
    const pathMarker: any[] = [];

    for (let i = 0; i < row; ++i) {
      pathMarker.push([]);
    }
    pathMarker.forEach((element) => {
      for (let j = 0; j < column; ++j)
        element.push([false, false, false, false]);
    });
    return pathMarker;
  }

  function moveX(direction: number): number {
    if (direction === 0)
      //up
      return -1;
    else if (direction === 2)
      //down
      return 1;
    return 0;
  }

  function moveY(direction: number): number {
    if (direction === 3)
      //left
      return -1;
    else if (direction === 1)
      //right
      return 1;
    return 0;
  }

  function rowClamp(posX: number) {
    if (posX >= row) return 0;
    else if (posX < 0) return row - 1;
    return posX;
  }

  function columnClamp(posY: number) {
    if (posY >= column) return 0;
    else if (posY < 0) return column - 1;
    return posY;
  }

  function changeDirection(
    posX: number,
    posY: number,
    direction: number
  ): number {
    const sign = grid[posX][posY];
    if (sign === "L") {
      direction -= 1;
      if (direction === -1) direction = 3;
    } else if (sign === "R") {
      direction += 1;
      if (direction === 4) direction = 0;
    }
    return direction;
  }

  //cycle length 0 => failed
  function findCycleLength(
    posX: number,
    posY: number,
    direction: number
  ): number {
    let cycleLength = 0;
    while (pathMarker[posX][posY][direction] == false) {
      ++cycleLength;
      pathMarker[posX][posY][direction] = true;
      posX += moveX(direction);
      posX = rowClamp(posX);
      posY += moveY(direction);
      posY = columnClamp(posY);
      direction = changeDirection(posX, posY, direction);
    }
    return cycleLength;
  }

  const pathMarker = createPathMarker(row, column);
  const answer: number[] = [];
  for (let x = 0; x < row; ++x) {
    for (let y = 0; y < column; ++y) {
      for (let dir = 0; dir < 4; ++dir) {
        const cycleLength = findCycleLength(x, y, dir);
        if (cycleLength !== 0) answer.push(cycleLength);
      }
    }
  }
  return answer.sort((a, b) => {
    return a - b;
  });
}

const grid = ["RS", "RS"];
const answer = solution(grid);
console.log(answer);
