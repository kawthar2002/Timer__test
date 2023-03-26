/**
 * @param {number} unit
 * @returns {string} formatted time unit e.g. unit 0 -> formatted unit '00'
 */
export const toTimeUnit = (unit) => {
  return Number(unit).toString().padStart(2, 0);
};

export const TIME = {
  MS_IN_SECOND: 1000,
  SECONDS_IN_MINUTE: 60,
  MINUTES_IN_HOUR: 60,
};

export const EMPTY_TIMER_OBJECT = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};
