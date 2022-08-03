<template>
  <Alert v-bind="alert" @close="alert.show = false" />

  <TodoForm :isLoading="isPostingTodo" title="Add Todo" @submit="submit" />
</template>

<script setup>
import TodoForm from "../components/TodoForm.vue";
import Alert from "../components/Alert.vue";
import { useAlert } from "../composables/alert";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const { alert, showAlert } = useAlert();

const isPostingTodo = ref(false);

const router = useRouter();

async function submit(todo) {
  isPostingTodo.value = true;
  try {
    await axios.post("/api/todos", todo);
    router.push("/");
  } catch (e) {
    console.error(e);
    showAlert("Failed creating todo");
  }
  isPostingTodo.value = false;
}
</script>
