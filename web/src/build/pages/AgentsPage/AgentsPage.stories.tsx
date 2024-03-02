import type { ComponentMeta } from '@storybook/react'

import AgentsPage from './AgentsPage'

export const generated = () => {
  return <AgentsPage />
}

export default {
  title: 'Pages/AgentsPage',
  component: AgentsPage,
} as ComponentMeta<typeof AgentsPage>
