import { render } from '@redwoodjs/testing/web'

import AdventurePage from './AdventurePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdventurePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdventurePage />)
    }).not.toThrow()
  })
})
