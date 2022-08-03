<template>
  <Alert v-bind="alert" @close="alert.show = false" />

  <section>
    <Spinner class="spinner" v-if="isLoading" />
    <div v-else>
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo(todo.id)"
        @edit="$router.push(`/todos/${todo.id}/edit`)"
      />
    </div>
  </section>
</template>

<script setup>
import Alert from "@/components/Alert.vue";
import Todo from "@/components/Todo.vue";
import axios from "axios";
import Spinner from "@/components/Spinner.vue";
import { ref } from "vue";
import { useFetch } from "@/composables/fetch";
import { useAlert } from "../composables/alert.js";

const { alert, showAlert } = useAlert();
const isPostingTodo = ref(false);

const { data: todos, isLoading } = useFetch("/api/todos", {
  onError: () => showAlert("Failed loading todos"),
});

async function addTodo(title) {
  if (title === "") {
    showAlert("Todo title is required");
    return;
  }

  isPostingTodo.value = true;
  const res = await axios.post("/api/todos", {
    title,
  });
  isPostingTodo.value = false;

  todos.value.push(res.data);
}

async function removeTodo(id) {
  await axios.delete(`/api/todos/${id}`);
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<style scoped>
.spinner {
  margin: auto;
  margin-top: 30px;
}
</style>
