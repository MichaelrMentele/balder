// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Conditions> = (args) => {
//   return <Conditions {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Conditions from './Conditions'

export const generated = () => {
  return <Conditions />
}

export default {
  title: 'Components/Conditions',
  component: Conditions,
} as ComponentMeta<typeof Conditions>
