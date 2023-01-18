import { render } from '@redwoodjs/testing/web'

import SectionHeading from './SectionHeading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SectionHeading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SectionHeading />)
    }).not.toThrow()
  })
})
