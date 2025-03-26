// 내장객체
// 원시값을 필요에 따라 관련된 빌트인 객체로 변환할 수 있다
// 필요성이 없어지면 다시 원시값으로 변환한다

const num = 234;
console.log(typeof num);

console.log(typeof num.toString());

const txt = "test";

console.log(txt.length);

// string에서 사용하는 내장객체
let str = " 안녕하세요 ";
console.log(str.charAt(2));
console.log(str.indexOf("안"));
console.log(str.lastIndexOf("안"));
console.log(str.includes("안"));
console.log(str.startsWith("녕"));
console.log(str.endsWith("하"));
console.log("...", str.slice(5));
console.log(str.trim());

let long = "여러분 반갑습니다. 오늘도 화이팅";
console.log(long.split(" "));
console.log(long.split(".", 1));

console.log(new Date());
console.log(new Date("jun 5, 2025"));

let now = new Date();
console.log(now.getFullYear());
console.log(now.getDay());
console.log(now.getMinutes());
console.log(now.toLocaleString);
