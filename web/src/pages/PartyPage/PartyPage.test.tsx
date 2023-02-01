import { render } from '@redwoodjs/testing/web'

import PartyPage from './PartyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PartyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PartyPage />)
    }).not.toThrow()
  })
})
