<template>
  <button
    :style="{ backgroundColor }"
    @click.prevent="$emit('click')"
    :class="{ circle: applyCircleClass }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
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

      return options[this.type];
    },

    applyCircleClass() {
      return this.circle;
    },
  },

  emits: ["click"],
};
</script>

<style scoped>
button {
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
