import type { ComponentMeta } from '@storybook/react'

import CharactersPage from './CharactersPage'

export const generated = () => {
  return <CharactersPage />
}

export default {
  title: 'Pages/CharactersPage',
  component: CharactersPage,
} as ComponentMeta<typeof CharactersPage>
