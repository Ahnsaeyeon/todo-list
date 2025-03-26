const user = {
  name: "Alice",
  age: 25,
  job: "Developer",
};

// 1. 객체 구조분해할당
// const { name, age } = user;
// console.log(name, age);

const { age, name } = user;
console.log(name, age); // Alice 25 key값을 기준으로 함
// 배열에서는 순서를 기준으로 하니 구분할 것

// 2. 변수 이름 변경
const { name: userName, job: profession } = user;
console.log(userName, profession);

// 3. 기본값 설정
const { salary = 5000, age: userAge = 30 } = user;
console.log(salary, userAge); // 기본값을 설정하는 것이기 때문에 원래 값이 있으면 원래의 값이 출력됨

// 4. 중첩된 객체 구조분해할당
const person = {
  name: "Bob",
  info: {
    address: "Seoul",
    hobbies: ["reading", "coding"],
  },
};

// 구조분해할당을 통해 이름과 첫 번째 취미를 출력하시오.
const {
  name: name2,
  info: {
    address,
    hobbies: [FirstHobby],
  },
} = person;

console.log(`이름: ${name2}, 첫 번째 취미: ${FirstHobby}`);
