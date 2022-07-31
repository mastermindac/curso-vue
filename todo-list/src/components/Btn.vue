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
export default {
  props: {
    variant: {
      required: false,
      default: "success",
      validator(value) {
        const options = ["danger", "warning", "info", "success", "secondary"];

        return options.includes(value);
      },
    },

    circle: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    backgroundColor() {
      const options = {
        danger: "var(--danger-color)",
        info: "var(--info-color)",
        warning: "var(--warning-color)",
        success: "var(--accent-color)",
        secondary: "var(--secondary-color)",
      };

      return options[this.variant];
    },

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

.circle {
  border-radius: 50%;
}
</style>
