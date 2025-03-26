const { cp } = require("fs");
const { parse } = require("path");
const readline = require("readline");

// 다음과 같은 패턴의 피라미드를 출력하는 함수를 작성하세요.
// 입력: 4 (4번 반복)
// 출력:
//    1
//   2 2
//  3 3 3
// 4 4 4 4

// 조건:
// - 함수는 높이를 매개변수로 받습니다.
// - 각 줄은 해당 줄의 숫자가 줄 번호만큼 반복됩니다.
// - 왼쪽 정렬이 아닌 피라미드 모양이어야 합니다.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let height;
let str = "";

rl.question("입력: ", (answer) => {
  height = answer;
  console.log(praimid(height));
});

input = parseInt(height);

function praimid(input) {
  let result = "";
  for (let i = 1; i <= input; i++) {
    let str = "";
    for (let j = 1; j <= input - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += i + " ";
    }
    result += str + "\n";
  }
  return result;
}
