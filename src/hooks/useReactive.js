import { reactive, toRefs } from "vue";

export default function(initialValue) {
  let state = reactive(initialValue),
    stateRefs = toRefs(state);
  const stateSetter = function(key, value) {
    if ({}.toString.call(key) === '[object Object]') {
      for(let k in key) {
        if (initialValue.hasOwnProperty(k)) {
          state[k] = key[k];
        }
      }
    } else {
      state[key] = typeof value === 'function' ? value(state[key]) : value;
    }
  }

  return [
    state,
    stateRefs,
    stateSetter
  ]
}