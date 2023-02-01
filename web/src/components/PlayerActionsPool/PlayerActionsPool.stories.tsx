import type { ComponentMeta } from '@storybook/react'

import PlayerActionsPool from './PlayerActionsPool'

export const generated = () => {
  return <PlayerActionsPool actions={[]} />
}

export default {
  title: 'Components/PlayerActionsPool',
  component: PlayerActionsPool,
} as ComponentMeta<typeof PlayerActionsPool>
