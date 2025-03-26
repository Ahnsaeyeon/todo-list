// 문자열에 포함된 괄호들의 유효성을 검사하는 함수를 작성하세요.

// 예시:
// checkBrackets("(()){}[]") => true
// checkBrackets("({)}") => false
// checkBrackets("((()") => false

// 조건:
// - 지원하는 괄호: (), {}, []
// - 괄호 쌍이 맞아야 함
// - 괄호 순서가 맞아야 함
// - 다른 문자가 있어도 괄호만 검사
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "";

rl.question("입력: ", (answer) => {
  input = answer;
  input = answer.replace(/[^(){}[\]]/g, "");
  console.log("input:", input);
  rl.close();
  arr = input.split("");
  console.log("arr:", arr);
  checkBrackets(arr);
});

function checkBrackets(arr) {
  let stack = [];
  let open = ["(", "{", "["];
  let close = [")", "}", "]"];

  for (let char of arr) {
    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      let openBracket = open[close.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== openBracket) {
        console.log(false);
        return;
      }
    }
  }
  console.log(stack.length === 0);
}
