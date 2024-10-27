import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'


describe('', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.get('h1').text()).toBe('fullcycle')
  })
})
