// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Saves> = (args) => {
//   return <Saves {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Saves from './Saves'

export const generated = () => {
  return <Saves />
}

export default {
  title: 'Components/Saves',
  component: Saves,
} as ComponentMeta<typeof Saves>
