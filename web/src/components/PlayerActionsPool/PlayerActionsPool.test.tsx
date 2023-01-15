import { render } from '@redwoodjs/testing/web'

import PlayerActionsPool from './PlayerActionsPool'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayerActionsPool', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerActionsPool />)
    }).not.toThrow()
  })
})
