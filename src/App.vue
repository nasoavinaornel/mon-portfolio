<template>
  <div class="portfolio">
    <nav class="navbar">
      <div class="nav-links">
        <RouterLink to="/" active-class="active">Accueil</RouterLink>
        <RouterLink to="/projets" active-class="active">Projets</RouterLink>
        <RouterLink to="/cv" active-class="active">CV</RouterLink>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Style global pour éviter les marges blanches du navigateur */
body {
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}
</style>

<style scoped>
.portfolio {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  color: #333;
}

.navbar {
  background-color: #1a1a1a;
  padding: 15px 0;
  text-align: center;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  margin: 0 15px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s;
}

.nav-links a.active {
  background-color: #2ec4b6;
  color: #1a1a1a;
}
</style>