// 단항연산자
// +, -, !

let a = 5;
console.log(a);

a = -a;
console.log(a);

a = -a;
console.log(a);

// a = a + 1;
// console.log(a);

// a += 1;
// console.log(a);

let bool = true;
console.log(bool);
console.log(!bool);

// 숫자가 아닌 타입들을 숫자로 변환하면
// 어떤 값이 나오는지 확인할 수 있음

console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
console.log(+NaN);
