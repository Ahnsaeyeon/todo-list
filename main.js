const addBtn = document.querySelector(".fa-plus"); // 추가 버튼
const input = document.querySelector(".footer_input"); // 입력 칸
const deadLine = document.querySelector(".footer_deadline"); // 마감일
const items = document.querySelector(".items"); // ul
const header = document.querySelector("header");

// 로컬스토리지에서 저장된 데이터 불러오기
document.addEventListener("DOMContentLoaded", loadItemsFromLocalStorage);

// 날짜 설정
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const week = date.getDay() - 1;

function printMonth(month) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekNames = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  const currentMonthName = monthNames[month];
  const currentWeekName = weekNames[week];

  const $month = document.createElement("p");
  const $year = document.createElement("p");
  const $day = document.createElement("h1");
  const $week = document.createElement("p");
  const $date = document.createElement("div");

  $month.className = "month";
  $year.className = "year";
  $day.className = "day";
  $week.className = "week";
  $date.className = "date";

  $year.innerHTML = year;
  $day.innerHTML = day;
  $week.innerHTML = currentWeekName;
  $month.innerHTML = currentMonthName;
  $date.innerHTML = `${$month.outerHTML}${$year.outerHTML}`;

  header.appendChild($day);
  header.appendChild($date);
  header.appendChild($week);
}

printMonth(month);

function alertDeadline(deadline, itemRow) {
  const today =
    String(date.getMonth() + 1).padStart(2, "0") +
    "/" +
    String(date.getDate()).padStart(2, "0") +
    "/" +
    date.getFullYear();
  if (deadline == today) {
    itemRow.classList.add("item_deadline");
    itemRow.innerHTML =
      `<i class="fa-solid fa-exclamation"></i>` + itemRow.innerHTML;
  }
}

// 로컬스토리지에서 데이터를 가져오는 함수
function loadItemsFromLocalStorage() {
  const storedItems = JSON.parse(localStorage.getItem("items"));
  storedItems.forEach(({ text, deadline, isDone }) => {
    const loadedItems = createItem(text, deadline, isDone);
    items.appendChild(loadedItems);
  });
}

// 로컬스토리지에 데이터 저장하는 함수
function saveItemsToLocalStorage() {
  const saveItem = document.querySelectorAll(".item");
  const saveItems = Array.from(saveItem).map((item) => ({
    text: item.querySelector("span").textContent,
    deadline: item.querySelector("p").textContent,
    isDone: item.classList.contains("item_done"),
  }));
  localStorage.setItem("items", JSON.stringify(saveItems));
}

// li 요소 생성 함수
function createItem(text, deadline, isDone = false) {
  const itemRow = document.createElement("li");
  itemRow.className = "item";
  if (isDone) {
    itemRow.classList.add("item_done"); // 완료 상태 반영
  }

  itemRow.innerHTML = `
    <span>${text}</span>
    <p>${deadline}</p>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-trash-can"></i>
  `;

  alertDeadline(deadline, itemRow);

  // 체크 버튼 클릭 시 완료 처리
  itemRow.querySelector(".fa-check").addEventListener("click", () => {
    itemRow.classList.toggle("item_done");
    saveItemsToLocalStorage(); // 상태 변경 시 저장
  });

  // 삭제 버튼 클릭 시 아이템 제거
  itemRow.querySelector(".fa-trash-can").addEventListener("click", () => {
    itemRow.remove();
    saveItemsToLocalStorage(); // 삭제 후 저장
  });

  return itemRow;
}

function onAdd() {
  const text = input.value.trim();
  const deadline = deadLine.value.trim();

  if (!text) {
    input.value = "";
    input.focus();
    return;
  }

  const newItem = createItem(text, deadline);
  items.appendChild(newItem);

  saveItemsToLocalStorage(); // 새로운 아이템 저장

  input.value = "";
  deadline.value = "";
  input.focus();
}

// 이벤트 등록
addBtn.addEventListener("click", onAdd);
input.addEventListener("keyup", (e) => e.key === "Enter" && onAdd());

// 날짜 선택 라이브러리 초기화
$(function () {
  $('input[name="footer_deadline"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: false,
    drops: "up",
  });
});
