// 배열 구조 분해 할당
const animal = ["bear", "tiger", "giraffe", "elephant", "lion"];

// // 1. 기본적인 구조분해할당
// const [ani1, ani2, ani3] = animal;
// console.log(ani1, ani2, ani3);

// // 2. 일부 요소 건너뛰기
// const [, anim2, , anim4] = animal;l
// console.log(anim2, anim4);

// 3. 기본값 설정
const zoo = ["panda", "koala"];
const [ani1, ani2, ani3 = "monkey", ani4 = "bird"] = zoo;

// 4. 중첩된 배열 구조 분해
const nestedArray = [1, [2, 3], 4];
const [n1, [n3, n4], n2] = nestedArray;
console.log(n1, n3, n4, n2);

// let arr = [10, 20, 30, 40];
// console.log(a1, a2, a3);
// let p1 = { name: "홍길동", age: 20, gender: "M" };
// console.log(n, a, gender);

// /**
//  * 출력값
//  * 10 20 30
//  * 홍길동 20 M
//  */
