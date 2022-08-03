<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.svg" width="50" />
      <div class="brand">Todo List App</div>
    </div>

    <div class="links">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--navbar-color);
  padding: 20px;
  margin-bottom: 30px;
}

.brand {
  font-size: 2rem;
}

.logo {
  display: flex;
  align-items: center;
}

.links ul {
  display: flex;
  align-items: center;
  padding: 20px;
  list-style: none;
}

.links a {
  font-size: 30px;
  margin-left: 10px;
  text-decoration: none;
  color: var(--text-color);
}

a.router-link-active {
  color: var(--accent-color);
}

@media (max-width: 680px) {
  .navbar {
    display: block;
  }

  .links ul {
    margin: 0;
    padding: 0;
  }

  .links a {
    font-size: 20px;
  }
}
</style>
