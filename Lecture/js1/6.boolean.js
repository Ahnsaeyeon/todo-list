// boolean - true, false

let isFree = true;
console.log("boolean", isFree);

// 값 앞에 !!를 붙이면 boolean 타입으로 변환
// falshy 값
console.log("boolean", !!0);
console.log("boolean", !!"");
console.log("boolean", !!null);
console.log("boolean", !!undefined);
console.log("boolean", !!NaN);

// truthy 값
console.log("boolean", !!3);
console.log("boolean", !!"hello");
console.log("boolean", !![]);
console.log("boolean", !!{});
console.log("boolean", !!Infinity);

console.clear();
// null 비었다
// undefined 값이 할당되지 않았다
let test = null;
console.log(test);
console.log(typeof test);
let test2 = undefined;
console.log(test2);
console.log(typeof test2);
