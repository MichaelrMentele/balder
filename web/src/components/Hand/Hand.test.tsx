import { render } from '@redwoodjs/testing/web'

import Hand from './Hand'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Hand', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hand />)
    }).not.toThrow()
  })
})
