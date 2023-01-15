import { render } from '@redwoodjs/testing/web'

import Saves from './Saves'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Saves', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Saves />)
    }).not.toThrow()
  })
})
