// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Hand> = (args) => {
//   return <Hand {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Hand from './Hand'

export const generated = () => {
  return <Hand />
}

export default {
  title: 'Components/Hand',
  component: Hand,
} as ComponentMeta<typeof Hand>
