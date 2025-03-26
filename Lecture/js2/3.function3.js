// 선언함수 function name(){}
// 익명함수 let name = function(){}
// 화살표 함수 const name =()=>{}
// parameters
// arguments
// return

// 생성자 함수 new Date() 객체를 생성
// 즉시 실행 함수 (function run(){})
// 콜백 함수
function add1(a = 0, b = 0, ...nums) {
  console.log(a);
  console.log(b);
  console.log(nums);
}

add1(4, 3, 1, 5, 6);
/**
 * 4
 * 3
 * [1, 5, 6]
 * 으로 출력됨
 */

// 콜백 함수: 함수를 만들어두고 이따 "실행해" 하면 실행되는 함수, 인자로 함수를 받는 함수
const add = (a, b) => a + b;
const mul = (a, b) => a * b;
function cal(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
}

cal(3, 4, add);
cal(-3, 4, mul);
