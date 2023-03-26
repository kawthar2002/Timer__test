<script setup>
import { ref } from "vue";
import { EMPTY_TIMER_OBJECT, toTimeUnit } from "../lib/stopwatch";
import { useStopwatch } from "../lib/useStopwatch";

const timer = ref({ ...EMPTY_TIMER_OBJECT });

const isRunning = ref(false);

const onTick = (time) => {
  timer.value = time;
};

const onPlay = () => {
  isRunning.value = true;
};
const onPause = () => {
  isRunning.value = false;
};

const { play, pause, stop } = useStopwatch({ onTick, onPlay, onPause });
</script>

<template>
  <div
    :class="{
      timer: true,
      on: isRunning,
    }"
  >
    <div class="time" :style="{ borderColor: isRunning ? '#fff' : '#9e9e9e' }">
      <div v-if="Number(timer?.hours) !== 0">{{ toTimeUnit(timer?.hours) }}:</div>
      <div v-if="Number(timer?.minutes) !== 0">{{ toTimeUnit(timer?.minutes) }}:</div>
      <div>{{ toTimeUnit(timer?.seconds) }}</div>
    </div>
    <div class="controls">
      <button v-if="!isRunning" @click="play" class="timer-button timer-button--play">
        <svg width="17" height="20" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20V0L17 10L0 20Z" fill="currentColor" />
        </svg>
      </button>
      <button v-else @click="pause" class="timer-button">
        <svg width="10" height="20" viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" width="3" height="20" fill="currentColor" />
          <rect width="3" height="20" fill="currentColor" />
        </svg>
      </button>
      <button @click="stop" class="timer-button">
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" fill="currentColor" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
div.on {
  color: #fff;
}
.controls {
  height: 50%;
  color: inherit;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
svg {
  color: inherit;
}
.timer {
  background: #696969;
  width: 225px;
  height: 120px;
  color: #9e9e9e;
}
.time {
  display: flex;
  color: inherit;
  justify-content: center;
  align-items: center;
  height: 50%;
  border-bottom: 1px solid #fff;
  font-family: "Gotham Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 21px;
  text-align: center;
}
.timer-button {
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
}
</style>
