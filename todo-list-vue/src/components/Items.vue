<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { emitter } from "@/mitt";

const item_list = ref([]); // 아이템 리스트

function handleSendTodo(newTodo) {
  item_list.value.push(newTodo); // 새로운 아이템을 리스트에 추가
}

function toggleItemDone(index) {
  item_list.value[index].done = !item_list.value[index].done;
}

function removeItem(index) {
  item_list.value.splice(index, 1); // 아이템 삭제
}

onMounted(() => {
  emitter.on("add-todo", handleSendTodo);
});

onUnmounted(() => {
  emitter.off("add-todo", handleSendTodo);
});
</script>

<template>
  <ul class="items">
    <li
      class="item"
      v-for="(item, index) in item_list"
      :key="index"
      :class="{ item_done: item.done }">
      <span class="item__text">{{ item.text }}</span>
      <i class="fa-solid fa-check" @click="toggleItemDone(index)"></i>
      <i class="fa-solid fa-trash-can" @click="removeItem(index)"></i>
    </li>
  </ul>
</template>

<style scoped>
/* ul */
.items {
  padding: 1rem;
  height: 500px;
  overflow-y: auto;
}
/* li */
.item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1rem;
  border-bottom: 1px dotted lightgray;
  cursor: pointer;
  transition: 0.3s;
}
.item:hover {
  /* background-color: #ff6a2523; */
  background-color: #43d58c15;
  border-radius: 10px;
}
.item span {
  flex: 1; /* span이 길쭉하게 되어서 나머지 아이콘들이 붙어 있을 수 있도록 */
  /* 나머지 여백을 혼자 다 가져라 */
}
/* li 체크 클릭을 때 */
.item.item_done span {
  opacity: 0.5;
  text-decoration: line-through;
}
.fa-exclamation {
  color: red;
}

/* .item_deadline {
  background-color: #43d58c15;
  border-radius: 10px;
}

.item_deadline:hover {
  background-color: #ff6a2523;
  border-radius: 10px;
} */

/*  아이콘 */
.fa-check,
.fa-trash-can {
  font-size: 16px;
  transition: 0.3s;
}
.fa-check:hover {
  color: #43d58c;
  transform: scale(1.3); /* 살짝 커짐 */
}
.fa-trash-can:hover {
  color: red;
  transform: scale(1.2); /* 살짝 커짐 */
}
</style>
