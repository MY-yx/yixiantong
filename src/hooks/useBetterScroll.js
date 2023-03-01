import BetterScroll from "better-scroll";
import { ref, onMounted } from 'vue';

export default function() {
  const wrapper = ref(null);
  onMounted(() => {
    new BetterScroll(wrapper.value);
  })
  
  return wrapper;
}