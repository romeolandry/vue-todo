import { onMounted, onUnmounted, ref } from 'vue'

export function useTimer( initialTime = 0) {
  const time = ref(initialTime)
  let timer;
    onMounted(() => {
        timer = setInterval(() => {
            time.value++
        }, 1000)
    });

    onUnmounted(() => {
        clearInterval(timer);
    });

    return {
        time,
        reset () {
            time.value = 0;
        }
     };
}
