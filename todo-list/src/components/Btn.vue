<template>
  <button
    class="btn"
    :style="{ backgroundColor }"
    :class="{ circle: applyCircleClass }"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";
import {
  useBackgroundColor,
  backgroundColorProps,
} from "../composables/backgroundColor.js";

const props = defineProps({
  circle: {
    default: false,
    type: Boolean,
  },
  ...backgroundColorProps,
});

const applyCircleClass = computed(() => props.circle);

const backgroundColor = useBackgroundColor(props);
</script>

<style scoped>
.btn {
  color: var(--text-color);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:disabled {
  opacity: 80%;
}

.circle {
  border-radius: 50%;
}
</style>
