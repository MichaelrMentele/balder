import { render } from '@redwoodjs/testing/web'

import EncountersPage from './EncountersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EncountersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EncountersPage />)
    }).not.toThrow()
  })
})
