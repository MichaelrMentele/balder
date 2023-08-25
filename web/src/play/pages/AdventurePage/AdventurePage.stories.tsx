import type { ComponentMeta } from '@storybook/react'

import AdventurePage from './AdventurePage'

export const generated = () => {
  return <AdventurePage />
}

export default {
  title: 'Pages/AdventurePage',
  component: AdventurePage,
} as ComponentMeta<typeof AdventurePage>
