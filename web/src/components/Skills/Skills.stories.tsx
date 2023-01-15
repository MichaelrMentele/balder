import type { ComponentMeta } from '@storybook/react'

import Skills from './Skills'

export const generated = () => {
  return <Skills />
}

export default {
  title: 'Components/Skills',
  component: Skills,
} as ComponentMeta<typeof Skills>
