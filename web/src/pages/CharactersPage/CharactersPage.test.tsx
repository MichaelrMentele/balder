import { render } from '@redwoodjs/testing/web'

import CharactersPage from './CharactersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CharactersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CharactersPage />)
    }).not.toThrow()
  })
})
