<template>
  <Navbar />

  <main class="container">
    <Alert
      message="Todo title is required"
      :show="showAlert"
      @close="showAlert = false"
    />

    <section>
      <AddTodoForm @submit="addTodo" />
    </section>

    <section>
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :title="todo.title"
        @remove="removeTodo(todo.id)"
      />
    </section>
  </main>
</template>

<script>
import Alert from "./components/Alert.vue";
import Navbar from "./components/Navbar.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import Todo from "./components/Todo.vue";

export default {
  components: {
    Alert,
    Navbar,
    AddTodoForm,
    Todo,
  },

  data() {
    return {
      todoTitle: "",
      todos: [],
      showAlert: false,
    };
  },

  methods: {
    addTodo(title) {
      if (this.title === "") {
        this.showAlert = true;
        return;
      }
      this.todos.push({
        title,
        id: Math.floor(Math.random() * 1000),
      });
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>
