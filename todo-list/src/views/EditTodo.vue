<template>
  <Spinner class="spinner" v-if="isLoading" />

  <Alert v-bind="alert" @close="alert.show = false" />

  <TodoForm
    v-if="todo !== null"
    :data="todo"
    :isLoading="isUpdatingTodo"
    title="Edit Todo"
    @submit="submit"
  />
</template>

<script setup>
import TodoForm from "../components/TodoForm.vue";
import Spinner from "../components/Spinner.vue";
import Alert from "../components/Alert.vue";
import { useFetch } from "../composables/fetch.js";
import { useAlert } from "../composables/alert";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const props = defineProps(["id"]);

const { alert, showAlert } = useAlert();

const isUpdatingTodo = ref(false);

const router = useRouter();

const { data: todo, isLoading } = useFetch(`/api/todos/${props.id}`, {
  onError: () => showAlert("Failed loading todo"),
});

async function submit(todo) {
  isUpdatingTodo.value = true;
  try {
    await axios.put(`/api/todos/${props.id}`, todo);
    router.push("/");
  } catch (e) {
    console.error(e);
    showAlert("Failed updating todo");
  }
  isUpdatingTodo.value = false;
}
</script>

<style scoped>
.spinner {
  margin: auto;
}
</style>
