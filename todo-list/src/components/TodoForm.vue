<template>
  <div class="form">
    <h1>{{ title }}</h1>
    <form class="edit-todo-form">
      <div class="form-field">
        <label>Todo Title</label>
      </div>
      <input type="text" v-model="todo.title" />

      <div class="form-field">
        <label>Todo Description</label>
      </div>
      <input type="text" v-model="todo.description" />

      <div class="form-field">
        <label>Todo Date</label>
      </div>
      <input type="date" v-model="todo.date" />

      <div class="submit">
        <Btn :disabled="isLoading" @click.prevent="$emit('submit', todo)">
          <Spinner v-if="isLoading" />
          <span v-else>Submit</span>
        </Btn>
      </div>
    </form>
  </div>
</template>

<script setup>
import Btn from "@/components/Btn.vue";
import Spinner from "@/components/Spinner.vue";
import { reactive } from "vue";

const props = defineProps({
  title: {
    default: "Todo Form",
  },
  data: {
    type: Object,
    default: () => ({
      title: "",
      description: "",
      date: null,
    }),
  },
  isLoading: {
    default: false,
  },
});

const todo = reactive({ ...props.data });

defineEmits(["submit"]);
</script>

<style scoped>
.form {
  background-color: var(--navbar-color);
  padding: 20px;
  border-radius: 10px;
}

.form-field {
  margin-top: 20px;
}

.edit-todo-form > input {
  width: 100%;
  height: 30px;
  border: 1px solid var(--accent-color);
}

.submit {
  margin-top: 20px;
  display: flex;
  justify-content: end;
}

.submit button {
  height: 50px;
  width: 80px;
}
</style>
