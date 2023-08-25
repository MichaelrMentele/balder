import { render } from '@redwoodjs/testing/web'

import PlayerCombatPage from './PlayerCombatPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlayerCombatPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerCombatPage />)
    }).not.toThrow()
  })
})
