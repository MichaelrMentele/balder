import { render } from '@redwoodjs/testing/web'

import CharacterEditPage from './CharacterEditPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CharacterEditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CharacterEditPage />)
    }).not.toThrow()
  })
})
