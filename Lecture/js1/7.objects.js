// 객체 - 복합 데이터
// 상태와 행동을 가지고 있는 복합 데이터

// 복합 데이터 {key:value, key:value, key:value, ...}
// 객체는 key와 value의 쌍으로 이루어진 데이터를 저장하는 컨테이너
// key는 문자열, value는 모든 데이터 타입이 가능
// key는 중복되면 안됨

let name = "appler";
let color = "red";
let display = "빨간사과";

let fruit = {
  name: "obj apple",
  color: "obj red",
  display: "obj 빨간사과",
};

console.log(fruit.name);
console.log(typeof fruit);

//reference
// 객체 타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let a = 1;
let b = a;
console.log(a, b);
b = 2;
console.log(a, b);

let apple = { name: "apple" };
let fruit2 = apple;
console.log(apple, fruit2);
fruit2.name = "banana";
console.log(apple, fruit2);
