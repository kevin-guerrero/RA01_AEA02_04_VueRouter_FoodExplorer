<script setup>

</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <nav class="site-nav" aria-label="Navegació principal">
        <RouterLink to="/" class="brand">FoodExplorer</RouterLink>
        <div class="nav-links">
          <RouterLink to="/">Inici</RouterLink>
          <RouterLink to="/Receptes">Receptes</RouterLink>
        </div>
      </nav>
    </header>
    <RouterView />
    <footer class="site-footer">Cuina bé, gaudeix més.</footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f7f6f1;
  color: #26352c;
  font-family: Arial, sans-serif;
}

a {
  color: inherit;
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-header {
  background: #fff;
  border-bottom: 1px solid #e8e8df;
}

.site-nav {
  width: 90%;
  max-width: 1120px;
  height: 74px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  color: #315a43;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  color: #526057;
  font-weight: 600;
  text-decoration: none;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #c36f3c;
}

.site-footer {
  margin-top: auto;
  padding: 22px 20px;
  color: #788078;
  font-size: 0.9rem;
  text-align: center;
}
</style>
