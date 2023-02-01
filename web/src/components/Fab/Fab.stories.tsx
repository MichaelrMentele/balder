// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Fab> = (args) => {
//   return <Fab {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Fab from './Fab'

export const generated = () => {
  return <Fab content="click me" />
}

export default {
  title: 'Components/Fab',
  component: Fab,
} as ComponentMeta<typeof Fab>
