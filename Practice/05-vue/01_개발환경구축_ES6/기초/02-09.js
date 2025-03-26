let obj = { result: 0 };

//JavaScript의 this 바인딩 문제
// 일반 함수는 호출될 때 this가 전역 객체를 참조함
obj.add = function (x, y) {
  function inner() {
    this.result = x + y; // 전역 객체를 가리키고 있음 -> 전역 객체인 result를 만듦
  }
  inner();
};

// 1. 화살표 함수
obj.add = function (x, y) {
  const inner = () => {
    this.result = x + y; // 바깥의 scope에 해당하는 obj를 가리킴
  };
  inner();
};

// 2. bind() 사용
// 함수의 this값을 특정 객체에 영구적으로 바인딩함
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner().bind(this); // scope인 obj를 가리킴
};

obj.add(3, 4);
console.log(obj.result); // 0
console.log(result); // 7
