import type { ComponentMeta } from '@storybook/react'

import JournalPage from './JournalPage'

export const generated = () => {
  return <JournalPage />
}

export default {
  title: 'Pages/JournalPage',
  component: JournalPage,
} as ComponentMeta<typeof JournalPage>
