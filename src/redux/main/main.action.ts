import * as t from './main.constant';

export const setInfo = () => ({
  type: t.SET_NAME,
});

// Action Creator
export const incrementCounter = () => ({
  type: t.INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: t.DECREMENT_COUNTER,
});
