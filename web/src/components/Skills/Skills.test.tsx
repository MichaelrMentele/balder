import { render } from '@redwoodjs/testing/web'

import Skills from './Skills'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Skills', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Skills />)
    }).not.toThrow()
  })
})
