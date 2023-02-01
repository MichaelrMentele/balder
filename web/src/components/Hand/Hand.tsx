import { Box, Text, VStack } from '@chakra-ui/react'

import Card from '../Card/Card'
import SectionHeading from '../SectionHeading/SectionHeading'

const Hand = ({ hand, object }) => {
  return (
    <Box>
      <VStack alignItems="left">
        <Text>{hand}</Text>
        <Text>{object.name}</Text>
      </VStack>
    </Box>
  )
}

const sampleEmptyHand = {
  name: 'Fist',
  damage: '1d4',
}

const sampleShield = {
  name: 'Shield',
  damage: '0',
  armor: 2,
}

const Hands = ({ leftHand = sampleEmptyHand, rightHand = sampleShield }) => {
  return (
    <Card>
      <SectionHeading>Hands</SectionHeading>
      <VStack alignItems="left">
        <Hand hand="left" object={leftHand} />
        <Hand hand="right" object={rightHand} />
      </VStack>
    </Card>
  )
}

export default Hands
