const addBtn = document.querySelector(".fa-plus"); // 추가 버튼
const input = document.querySelector(".footer_input"); // 입력 칸
const items = document.querySelector(".items"); // ul

// li 요소 생성함수
function createItem(text) {
  //   console.log(text);
  const itemRow = document.createElement("li");
  itemRow.className = "item";
  itemRow.innerHTML = `
          <span>${text}</span>
          <i class="fa-solid fa-check"></i>
          <i class="fa-solid fa-trash-can"></i>
        `;
  //   const itemRow = `<li class="item">
  //           <span>오늘의 할 일 리스트</span>
  //           <i class="fa-solid fa-check"></i>
  //           <i class="fa-solid fa-trash-can"></i>
  //         </li>`;
  // 이렇게 되면 나중에 클래스를 더하거나 할 때 선택할 수가 없어서 이렇게 안 함

  // 체크버튼 클릭 시 클래스 추가 이벤트
  itemRow.querySelector(".fa-check").addEventListener("click", () => {
    itemRow.classList.toggle("item_done");
  });

  // 삭제 버튼 클릭 시 item Row 제거 버튼
  itemRow.querySelector(".fa-trash-can").addEventListener("click", () => {
    itemRow.remove();
  });

  setTimeout(() => {
    itemRow.scrollIntoView({ block: "center" });
  }, 0);

  requestAnimationFrame(() => itemRow.scrollIntoView({ block: "center" }));

  return itemRow;
} // onAdd 함수에서 나중에 재호출 되는 콜백함수로 사용

function onAdd() {
  console.log("함수 실행 중이에요~💗");
  const text = input.value.trim();
  console.log(text);
  if (!text) {
    input.value = "";
    input.focus();
    return;
  }

  // li 생성하는 함수 createItem
  // ul에 생성값을 추가함

  items.appendChild(createItem(text));
  input.value = "";
  input.focus();
}

// 이벤트 등록
addBtn.addEventListener("click", onAdd); // 추가 버튼 클릭했을 때 함수 출력하는 이벤트

// input.addEventListener("keypress", (e) => {
//   //   console.log(e);
//   if (e.key === "Enter") {
//     onAdd();
//   }
// }); // Enter 키를 눌렀을 때 함수 출력 하는 이벤트

input.addEventListener("keyup", (e) => e.key === "Enter" && onAdd());
// e.key가 Enter일 때 onAdd가 실행
