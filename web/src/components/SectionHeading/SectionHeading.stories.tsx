import type { ComponentMeta } from '@storybook/react'

import SectionHeading from './SectionHeading'

export const generated = () => {
  return <SectionHeading>This is a heading</SectionHeading>
}

export default {
  title: 'Components/SectionHeading',
  component: SectionHeading,
} as ComponentMeta<typeof SectionHeading>
