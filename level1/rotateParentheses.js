const s = "[]{}()";
console.log(solution(s));
const parentheses = {
  "{": "}",
  "(": ")",
  "[": "]",
};

function solution(s) {
  const splitArr = s.split("");
  const size = s.length;
  let count = 0;
  for (let i = 0; i < size; ++i) {
    if (isValid(splitArr)) {
      ++count;
    }
    splitArr.push(splitArr.shift());
  }
  return count;
}

function isValid(arr) {
  const stack = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
      stack.push(arr[i]);
    } else if (arr[i] == ")") {
      if (stack[stack.length - 1] == "(") stack.pop();
      else return false;
    } else if (arr[i] == "}") {
      if (stack[stack.length - 1] == "{") stack.pop();
      else return false;
    } else if (arr[i] == "]") {
      if (stack[stack.length - 1] == "[") stack.pop();
      else return false;
    }
  }
  if (stack.length != 0) {
    return false;
  }
  return true;
}
