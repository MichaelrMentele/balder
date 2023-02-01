// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DiceButton> = (args) => {
//   return <DiceButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DiceButton from './DiceButton'

export const generated = () => {
  return <DiceButton />
}

export default {
  title: 'Components/DiceButton',
  component: DiceButton,
} as ComponentMeta<typeof DiceButton>
