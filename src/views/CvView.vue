<template>
  <div class="page-content container">
    <h2>Mon Parcours &amp; Certifications</h2>
    <div class="timeline">
      <div class="timeline-item">
        <h4>Licence 3 — Informatique et Gestion</h4>
        <p>École Nationale d'Informatique (ENI)</p>
      </div>
      <div class="timeline-item">
        <h4>Certification DevOps</h4>
        <p>Orange Digital Center — Déploiement automatique d'applications.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container { max-width: 800px; margin: 40px auto; padding: 0 20px; }
.timeline { border-left: 3px solid #2ec4b6; padding-left: 20px; margin-top: 30px; }
.timeline-item { margin-bottom: 30px; position: relative; }
.timeline-item::before { content: ''; width: 12px; height: 12px; background: #2ec4b6; border-radius: 50%; position: absolute; left: -28px; top: 6px; }
</style>
