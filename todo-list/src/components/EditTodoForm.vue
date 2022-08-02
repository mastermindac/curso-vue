<template>
  <Modal :show="show" @close="$emit('close')">
    <template #header>
      <h2>Edit Todo</h2>
    </template>

    <template #content>
      <form class="edit-todo-form">
        <div>
          <label>Todo Title</label>
        </div>
        <input
          type="text"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </form>
    </template>

    <template #footer>
      <div class="edit-todo-modal-footer">
        <Btn class="edit-todo-submit-btn" @click="$emit('submit')">Submit</Btn>
        <Btn variant="danger" @click="$emit('close')">Close</Btn>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import Modal from "./Modal.vue";
import Btn from "./Btn.vue";

defineProps(["modelValue", "show"]);

defineEmits(["close", "submit", "update:modelValue"]);
</script>

<style scoped>
.edit-todo-form > input {
  width: 100%;
  height: 30px;
  border: 1px solid var(--accent-color);
}

.edit-todo-modal-footer {
  display: flex;
  justify-content: end;
  padding: 10px;
}

.edit-todo-submit-btn {
  margin-right: 5px;
}
</style>
