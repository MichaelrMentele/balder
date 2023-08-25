import type { ComponentMeta } from '@storybook/react'

import PlayerCombatPage from './PlayerCombatPage'

export const generated = () => {
  return <PlayerCombatPage />
}

export default {
  title: 'Pages/PlayerCombatPage',
  component: PlayerCombatPage,
} as ComponentMeta<typeof PlayerCombatPage>
