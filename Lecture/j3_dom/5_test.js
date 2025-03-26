// li 요소를 클릭하면 클릭된 대상에 .active가 붙는다
// li 요소를 클릭하면 모든 li에 .active를 삭제한다

const $lists = document.querySelectorAll(".con > li");
const $con = document.querySelector(".con");

// $lists.forEach((el, i) => {
//   el.addEventListener("click", (e) => {
//     $lists.forEach((el) => {
//       el.classList.remove("active");
//     });
//     console.log("리스트가 클릭됨", i);
//     console.log("이벤트 객체", e.target); // p 요소
//     console.log("이벤트 객체", e.currentTarget); // 이벤트가 적용이 되어져 있는 el
//     el.classList.add("active");
//   });
// });

// $con.addEventListener("click", (e) => {
//   console.log("currenTarget", e.currentTarget);
//   console.log("target", e.target);
//   if (e.target === p) {
//     console.log("p 요소입니다");
//     return;
//   } else {
//     console.log("p 요소가 아닙니다");
//   }
// });

$con.addEventListener("mouseenter", () => {
  console.log("마우스가 진입했다");
});

$con.addEventListener("mouseleave", () => {
  console.log("마우스가 빠져 나갔다");
});

$con.addEventListener("mousemove", () => {
  console.log("마우스가 움직인다");
});
