<script setup>
import { ref } from "vue";
import Timer from "./components/Timer.vue";
import "./index.css";

const timers = ref([]);
let timerid = 1;

const addTimer = () => {
  timers.value = [...timers.value, ++timerid];
};
</script>

<template>
  <div class="timers">
    <Timer v-for="_ in timers" />
    <button class="add-timer" @click="addTimer()">
      <div class="plus" />
    </button>
  </div>
</template>

<style scoped>
.timers {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  padding: 72px 46px;
  justify-content: center;
}

.add-timer {
  width: 225px;
  height: 120px;
  background: #696969;
  border: none;
  outline: none;
  cursor: pointer;
}
.plus {
  width: 20px;
  aspect-ratio: 1;
  border: 10px solid #696969;
  background: conic-gradient(from 90deg at 3px 3px, #696969 90deg, #9e9e9e 0) calc(100% + 3px / 2)
    calc(100% + 3px / 2) / calc(50% + 3px) calc(50% + 3px);
  display: inline-block;
}
</style>
