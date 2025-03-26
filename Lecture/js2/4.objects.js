// 키로 사용할 수 있는 것
// key - 문자, '문자열', 숫자
// value - 원시값, 객체(배열, 함수 등도 포함)

let apple = {
  name: "사과",
  "name-test": "사과과",
  "한글 키": "한글 사과 이름",
  0: 100,
};

console.log(apple.name);
console.log(apple["name-test"]);
console.log(apple[0]);
// 문자 말고는 다 대괄호 표기법으로 접근해야 함

let nums = ["11", "test", "sample"];
console.log(nums[2]);
// 배열과 객체의 접근 방식 비슷함

const obj = {
  name: "개냥이",
  age: 2,
};

console.log(obj.age);
console.log(obj.name);

function getValue(obj, key) {
  return obj[key];
}
getValue(obj, "name");

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, "feel", "happy");
console.log(obj);

// key: value가 같으면 짧게 줄일 수 있다
const x = 0;
const y = 0;
// const coord = { x: x, y: y };
const coord = { x, y };

function makeObj(name, age) {
  return { name, age };
}
const person = makeObj("somi", 3);
console.log(person);

// 객체에 함수
const banana = {
  name: "바나나",
  display: function () {
    console.log("노랑색 바나나");
  },
  //   display () => {
  //     console.log("노랑색 바나나");
  //     }
};
console.log(banana.name);

banana.display();
console.log(banana);
