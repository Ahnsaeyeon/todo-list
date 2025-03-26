console.log("외부 파일");

const $target = document.getElementsByClassName("target");
console.log("target--:", $target);

const $ul = document.querySelector(".list");
console.log($ul);
$ul.style.background = "red";

const $ul2 = document.querySelectorAll(".list");
console.log($ul2);

const $ul3 = document.getElementsByClassName("list");
console.log($ul3);
// 이미 클래스라고 적혀 있기 때문에 쿼리셀럭터와는 달리 클래스를 나타내는 .를 사용하지 않아도 됨

let output = "";
const $target2 = document.getElementById("target");
console.log($target2);
for (let i = 0; i < 10; i++) {
  output += `<p>${i + 1}번쨰 요소</p>`;
}
//$target2.innerHTML = output;
$target2.textContent = output;
