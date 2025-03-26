// 제어문 - 반복문 (for)

/** for() {} */

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   for (let j = 0; j < 5; j++) {
//     console.log("--", j);
//   }
// }
// console.clear();

// 반복문은 배열과 객체 데이터를 다룰 때 많이 사용됨
let fruits = ["사과", "바나나", "체리"];
console.log(fruits);

fruits.forEach((fruit, index, arr) => {
  console.log(fruit);
  console.log(index);
  console.log(arr);
  console.log("----");
});

for (let fruit of fruits) {
  console.log(fruit);
}

// 객체를 반복문으로 출력
let members = {
  manager: "한식이",
  designer: "두식이",
  devil: "세식이",
};
console.log("manager는", members.manager);

for (let m in members) {
  console.log("members의 key값은", members[m]);

  console.log("meebers의 value값은", m);
}
