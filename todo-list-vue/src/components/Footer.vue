<script setup>
import { ref } from "vue";
import { emitter } from "@/mitt";
const input = ref("");
const inputRef = ref("");

const onAdd = () => {
  const text = input.value.trim();
  if (!text) {
    input.value = "";
    return;
  }

  const newItem = {
    text: text,
    done: false,
  };

  sendTodo(newItem);
  input.value = "";
  inputRef.value.focus();
};

const emit = defineEmits(["add-todo"]);
function sendTodo(items, isDone) {
  emitter.emit("add-todo", items);
  console.log("add-todo", items);
}
</script>

<template>
  <footer class="footer">
    <div class="footer_wrapper">
      <input
        type="text"
        ref="inputRef"
        class="footer_input"
        placeholder="입력"
        v-model="input"
        @keyup.enter="onAdd" />
      <!-- <input type="text" name="footer_deadline" class="footer_deadline" /> -->
    </div>
    <i class="fa-solid fa-plus" @click="onAdd"></i>
  </footer>
</template>

<style scoped>
.footer {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.footer_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px; /* 요소 간 간격 조정 */
  padding: 1rem 1rem;
}

.footer_input {
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.3rem;
  padding: 1rem 1rem 1.25rem; /* 플러스 버튼이 겹치지 않도록 아래 패딩 조금 더 줌 */
}

.footer_deadline {
  width: 40%;
  font-size: 1.2rem;
  color: rgb(73, 73, 73);
}

.fa-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: auto; /* 인라인이라 원래 적용이 안 되는데, display 속성을 줘서 적용됨 */
  font-size: 1.5rem;
  background-color: #43d58c;
  border-radius: 50%;
  color: white;
  transition: 0.3s;
  transform: translateY(-10px);
  cursor: pointer;
}

.fa-plus:hover {
  transform: translateY(-15px) scale(1.1); /* 기존의 것 덮어쓰기 함 */
  /* matrix라는 속성값도 공부해볼 것 */
}
</style>
