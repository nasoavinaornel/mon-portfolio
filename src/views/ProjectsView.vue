<template>
  <div class="page-content container">
    <h2>Mes Réalisations &amp; Projets DevOps</h2>
    <p class="subtitle">Liste des projets techniques configurés et administrés.</p>

    <div class="projects-grid">
      <div 
        v-for="(projet, index) in listeProjets" 
        :key="index" 
        class="project-card"
      >
        <div class="card-header">
          <h3>{{ projet.titre }}</h3>
          <span class="badge">{{ projet.categorie }}</span>
        </div>
        <p>{{ projet.description }}</p>
        <div class="tech-stack">
          <span v-for="tech in projet.technologies" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Nos données sont proprement stockées dans un tableau réactif
const listeProjets = ref([
  {
    titre: "Infrastructure Réseau & Serveurs",
    categorie: "Admin Sys",
    description: "Mise en place d'un serveur DNS local Bind9, d'un serveur de messagerie Postfix/Dovecot, et configuration de redondance de données avec un miroir RAID 1.",
    technologies: ["Linux Ubuntu", "Bind9", "Postfix", "RAID 1"]
  },
  {
    titre: "Pipeline CI/CD & Conteneurisation",
    categorie: "DevOps",
    description: "Création d'une architecture Docker multi-stage pour un site Vue 3 avec automatisation des tests unitaires et déploiement via GitHub Actions.",
    technologies: ["Docker", "GitHub Actions", "Vitest", "Nginx"]
  },
  {
    titre: "Sécurisation & Détection d'Attaques",
    categorie: "Cybersécurité",
    description: "Analyse et détection d'attaques post-exploitation Android (générées via Metasploit) en utilisant le système de détection d'intrusion (IDS) Suricata.",
    technologies: ["Suricata IDS", "Metasploit", "Wireshark"]
  }
])
</script>

<style scoped>
.container { max-width: 1000px; margin: 40px auto; padding: 0 20px; }
.subtitle { color: #666; font-size: 1.1rem; margin-bottom: 30px; text-align: center; }
h2 { text-align: center; color: #1a1a1a; }

.projects-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 25px; 
}

.project-card { 
  background: white; 
  padding: 25px; 
  border-radius: 12px; 
  box-shadow: 0 4px 15px rgba(0,0,0,0.05); 
  border-top: 4px solid #2ec4b6; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.card-header h3 { margin: 0; font-size: 1.3rem; color: #1a1a1a; max-width: 70%; }

.badge {
  background-color: #e6f9f8;
  color: #208b81;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tech-stack { margin-top: 15px; display: flex; flex-wrap: wrap; gap: 8px; }

.tech-tag {
  background-color: #f1f3f5;
  color: #495057;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>