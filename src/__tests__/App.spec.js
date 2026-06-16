import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App.vue', () => {
  it("affiche correctement le nom de l'étudiant", () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Nasoavina Ornel')
  })
})
