import type { ComponentMeta } from '@storybook/react'

import CharacterEditPage from './CharacterEditPage'

export const generated = () => {
  return <CharacterEditPage />
}

export default {
  title: 'Pages/CharacterEditPage',
  component: CharacterEditPage,
} as ComponentMeta<typeof CharacterEditPage>
