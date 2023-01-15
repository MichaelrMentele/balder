import { render } from '@redwoodjs/testing/web'

import Conditions from './Conditions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Conditions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Conditions />)
    }).not.toThrow()
  })
})
