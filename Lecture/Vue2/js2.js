let obj1 = { name: "홍길동", age: 30 };
let obj2 = obj1;

console.log(obj1 === obj2); // true 주소를 참조하고 있는 것이므로 동일하다

let obj3 = { ...obj1 };
console.log(obj1 === obj3); // false

let arr = [1, 2, 3];
let arr2 = arr;
console.log(arr === arr2); // true

let arr3 = { ...arr };
console.log(arr === arr3); // false heap 주소가 바뀌었기 때문에 다르다
console.log(arr[0] === arr3[0]); // 결과값은 동일하다
