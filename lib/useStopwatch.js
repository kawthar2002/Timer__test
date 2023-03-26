import { ref, onBeforeMount, onBeforeUnmount } from "vue";
import { EMPTY_TIMER_OBJECT, TIME } from "./stopwatch";

/**
 * @param {{onTick: (time: string) => void, onPlay: () => void, onPause: () => void}}
 * @returns
 */
export const useStopwatch = ({ onTick, onPause, onPlay }) => {
  const intervalId = ref(null);
  const timer = ref({ ...EMPTY_TIMER_OBJECT });

  const tick = () => {
    timer.value.seconds++;

    if (timer.value.seconds === TIME.SECONDS_IN_MINUTE) {
      timer.value.minutes += 1;
      timer.value.seconds = 0;
    }

    if (timer.value.minutes === TIME.MINUTES_IN_HOUR) {
      timer.value.hours += 1;
      timer.value.minutes = 0;
      timer.value.seconds = 0;
    }

    if (onTick) {
      onTick(timer.value);
    }
  };

  const play = () => {
    if (!intervalId.value) {
      intervalId.value = setInterval(tick, TIME.MS_IN_SECOND);
      if (onPlay) {
        onPlay();
      }
    }
  };

  const pause = () => {
    clearInterval(intervalId.value);
    intervalId.value = null;
    if (onPause) {
      onPause();
    }
  };

  const stop = () => {
    timer.value = { ...EMPTY_TIMER_OBJECT };
    pause();
    onTick(timer.value);
  };

  onBeforeMount(play);
  onBeforeUnmount(stop);

  return {
    play,
    pause,
    stop,
  };
};
