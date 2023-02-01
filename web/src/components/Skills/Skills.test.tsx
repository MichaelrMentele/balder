import { render } from '@redwoodjs/testing/web'

import Skills from './Skills'

describe('Skills', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Skills />)
    }).not.toThrow()
  })
})
