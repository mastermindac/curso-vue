<template>
  <form class="add-todo-form">
    <input v-model="todoTitle" type="text" placeholder="Todo Title" />
    <div>
      <button @click.prevent="$emit('submit', todoTitle)">Add Todo</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todoTitle: "",
    };
  },

  emits: ["submit"],
};
</script>

<style>
.add-todo-form {
  display: flex;
  justify-content: space-between;
}

.add-todo-form input {
  width: 80%;
  border: solid 2px var(--accent-color);
}

.add-todo-form button {
  background: var(--accent-color);
  color: var(--text-color);
  border: none;
  height: 50px;
}
</style>
