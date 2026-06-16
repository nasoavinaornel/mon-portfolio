import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../views/HomeView.vue' // On cible la page d'accueil

describe('HomeView.vue', () => {
  it("affiche correctement le nom de l'étudiant sur la page d'accueil", () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Nasoavina Ornel')
  })
})