import type { ComponentMeta } from '@storybook/react'

import PartyPage from './PartyPage'

export const generated = () => {
  return <PartyPage />
}

export default {
  title: 'Pages/PartyPage',
  component: PartyPage,
} as ComponentMeta<typeof PartyPage>
