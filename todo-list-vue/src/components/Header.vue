<script setup>
import { computed } from "vue";

// 날짜 설정
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const week = date.getDay() - 1;

//월과 요일 이름 배열
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

const currentMonthName = computed(() => monthNames[month]);
const currentWeekName = computed(() => weekNames[week]);
</script>

<template>
  <div class="header">
    <h1 class="day">{{ day }}</h1>
    <div class="date">
      <p class="month">{{ currentMonthName }}</p>
      <p class="year">{{ year }}</p>
    </div>
    <p class="week">{{ currentWeekName }}</p>
  </div>
</template>

<style scoped>
.header {
  /* border: 1px solid red; */
  display: flex;
  /* justify-content: space-around; */
  padding: 30px 2.5rem;
  /* background-color: #f1f0f7; */
  border-bottom: 1px solid lightgray;
  gap: 0.5rem;
  font-size: 1.4rem;
}

.date {
  flex: 1;
}

.day,
.week {
  display: flex;
  align-items: center;
}
</style>
