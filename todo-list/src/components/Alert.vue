<template>
  <div v-if="show" class="alert" :style="{ backgroundColor }">
    <div>{{ message }}</div>
    <div @click="close" class="close-alert">&times;</div>
  </div>
</template>

<script setup>
import { backgroundColorProps, useBackgroundColor } from "../composables/backgroundColor.js";

const props = defineProps({
  ...backgroundColorProps,
  message: {
    required: true,
    type: String,
  },
  show: {
    required: true,
    type: Boolean,
  },
});

const emit = defineEmits(["close"]);

const backgroundColor = useBackgroundColor(props);

function close() {
  emit("close");
}
</script>

<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
  height: 50px;
}

.close-alert {
  font-size: 50px;
  cursor: pointer;
}
</style>
