import type { ComponentMeta } from '@storybook/react'

import EncountersPage from './EncountersPage'

export const generated = () => {
  return <EncountersPage />
}

export default {
  title: 'Pages/EncountersPage',
  component: EncountersPage,
} as ComponentMeta<typeof EncountersPage>
