import { VStack, Text } from '@chakra-ui/react'

import Card from '../Card/Card'
import SectionHeading from '../SectionHeading/SectionHeading'

const NoConditions = () => {
  return <Text>No conditions</Text>
}

const Condition = () => {
  return null
}

const ConditionsList = ({ conditions: _ }) => {
  return (
    <VStack alignItems="left">
      <Condition />
      <Condition />
    </VStack>
  )
}

const Conditions = () => {
  const conditions = []
  return (
    <Card>
      <VStack minH="100px" alignItems="left">
        <SectionHeading>Conditions</SectionHeading>
        {conditions.length > 0 ? (
          <ConditionsList conditions={conditions} />
        ) : (
          <NoConditions />
        )}
      </VStack>
    </Card>
  )
}

export default Conditions
