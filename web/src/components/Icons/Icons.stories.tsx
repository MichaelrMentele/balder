// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Icons> = (args) => {
//   return <Icons {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Icons from './Icons'

export const generated = () => {
  return <Icons />
}

export default {
  title: 'Components/Icons',
  component: Icons,
} as ComponentMeta<typeof Icons>
