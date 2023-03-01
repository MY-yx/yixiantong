import { ref } from 'vue';

export default function(initalValue) {
  let state = ref(initalValue);
  let stateSetter = (newState) => {
    state.value = typeof newState === 'function' ? newState(state) : newState;
  }

  return [
    state,
    stateSetter
  ];
}