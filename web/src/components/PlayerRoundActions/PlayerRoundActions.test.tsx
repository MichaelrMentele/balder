import { render } from '@redwoodjs/testing/web'

import PlayerRoundActions from './PlayerRoundActions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayerRoundActions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerRoundActions />)
    }).not.toThrow()
  })
})
