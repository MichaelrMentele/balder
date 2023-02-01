import { render } from '@redwoodjs/testing/web'

import JournalPage from './JournalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JournalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JournalPage />)
    }).not.toThrow()
  })
})
