function solution(scores: number[][]): string {
  const realScore = transformArray(scores);
  let record = "";
  const length = realScore.length;

  realScore.forEach((score, index) => {
    const selfEvalScore = score[index];
    let count = length;
    score.sort((a, b) => {
      return a - b;
    });
    if (isUniqueMinOrMaxScore(score, selfEvalScore)) {
      score[score.indexOf(selfEvalScore)] = 0;
      --count;
    }
    console.log(average(sum(score), count));
    record += getRecord(average(sum(score), count));
  });
  return record;
}

function isUniqueMinOrMaxScore(
  score: number[],
  selfEvalScore: number
): boolean {
  if (
    (score.indexOf(selfEvalScore) === 0 ||
      score.indexOf(selfEvalScore) === score.length - 1) &&
    score.indexOf(selfEvalScore) === score.lastIndexOf(selfEvalScore)
  )
    return true;
  return false;
}

function transformArray(array: any[][]): any[][] {
  const transformedArray = array[0].map(function (col, i) {
    return array.map(function (row) {
      return row[i];
    });
  });
  return transformedArray;
}

function sum(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr);
}

function average(sum: number, count: number): number {
  return sum / count;
}

function getRecord(score: number): string {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 50) return "D";
  else return "F";
}

const scores = [
  [50, 90],
  [50, 87],
];

console.log(solution(scores));
