import { ref, watch } from "vue";
import axios from "axios";

function useFetch(url, options = { onError: null }) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(true);

  let stopErrorWatcher = null;
  if (options.onError !== null) {
    stopErrorWatcher = watch(error, (e) => options.onError(e));
  }

  axios
    .get(url)
    .then((res) => (data.value = res.data))
    .catch((e) => (error.value = e))
    .finally(() => {
      isLoading.value = false;
      if (stopErrorWatcher !== null) {
        stopErrorWatcher();
      }
    });

  return {
    data,
    error,
    isLoading,
  };
}

export { useFetch };
