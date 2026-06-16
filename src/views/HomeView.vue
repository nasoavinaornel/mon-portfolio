<template>
  <div class="page-content">
    <header class="hero-section">
      <div class="hero-card">
        <h1>Je suis <span class="highlight">Nasoavina Ornel</span></h1>
        <h2>Développeur &amp; Administrateur Réseaux</h2>
      </div>
    </header>
    <section class="description-section">
      <div class="description-card">
        <p>
          Étudiant en Licence Informatique à l'<strong>ENI</strong>, je m'intéresse particulièrement à la programmation, 
          aux réseaux et à la cybersécurité. Passionné par les systèmes, je cherche un stage pratique pour mettre mes 
          compétences en action.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section { display: flex; justify-content: center; padding: 40px 20px; }
.hero-card { background: linear-gradient(135deg, #2ec4b6 0%, #208b81 100%); color: white; width: 100%; max-width: 900px; text-align: center; padding: 50px 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
.hero-card h1 { font-size: 2.5rem; margin-bottom: 10px; }
.highlight { color: #ffbf00; }
.hero-card h2 { font-size: 1.8rem; font-weight: 400; opacity: 0.9; }
.description-section { display: flex; justify-content: center; padding: 0 20px; }
.description-card { background: white; border-radius: 12px; padding: 30px; max-width: 800px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); text-align: center; line-height: 1.6; font-size: 1.1rem; }
</style>
