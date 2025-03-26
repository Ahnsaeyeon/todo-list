// 객체 {}, 배열 []
// 함수()
// 선언함수, 익명함수

// function 함수이름() {}
// let 함수이름 = function() {}
// 함수는 호출이 일어나기 전까지 실행되지 않음
function add() {
  console.log("함수를 호출했다");
}
add();

function add2(a, b) {
  console.log("합은", a + b);
  console.log(arguments["0"]);
}
add2(2, 5);

