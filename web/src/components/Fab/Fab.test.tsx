import { render } from '@redwoodjs/testing/web'

import Fab from './Fab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Fab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Fab />)
    }).not.toThrow()
  })
})
