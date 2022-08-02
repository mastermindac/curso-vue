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

<script>
import { backgroundColor } from "../mixins/backgroundColor.js";

export default {
  mixins: [backgroundColor],

  props: {
    circle: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    applyCircleClass() {
      return this.circle;
    },
  },
};
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
