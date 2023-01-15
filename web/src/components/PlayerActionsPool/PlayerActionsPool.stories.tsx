// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PlayerActionsPool> = (args) => {
//   return <PlayerActionsPool {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PlayerActionsPool from './PlayerActionsPool'

export const generated = () => {
  return <PlayerActionsPool />
}

export default {
  title: 'Components/PlayerActionsPool',
  component: PlayerActionsPool,
} as ComponentMeta<typeof PlayerActionsPool>
