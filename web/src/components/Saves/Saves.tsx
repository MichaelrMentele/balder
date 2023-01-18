import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'

import Card from '../Card/Card'
import SectionHeading from '../SectionHeading/SectionHeading'

const sampleSaves = [
  {
    name: 'Strength',
    modifier: 4,
  },
  {
    name: 'Dexterity',
    modifer: -1,
  },
]

const Save = ({ save }) => {
  return (
    <HStack>
      <Heading as="h5" size="sm">
        {save.name}
      </Heading>
      <Text>{save.modifer}</Text>
      <Button onClick={save.onUse}>Use</Button>
    </HStack>
  )
}

const SaveList = ({ saves }) => {
  return (
    <VStack alignItems="left">
      {saves.map((save, index) => (
        <Save key={index} save={save} />
      ))}
    </VStack>
  )
}

const Saves = ({ saves = sampleSaves }) => {
  return (
    <Card>
      <SectionHeading>Saves</SectionHeading>
      <SaveList saves={saves} />
    </Card>
  )
}

export default Saves
