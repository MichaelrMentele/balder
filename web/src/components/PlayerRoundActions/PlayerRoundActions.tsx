import { Stack } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'

import Card from '../Card/Card'
import SectionHeading from '../SectionHeading/SectionHeading'

const PlayerRoundActions = () => {
  return (
    <Card>
      <Stack>
        <SectionHeading>Round Overview</SectionHeading>
        <Checkbox>Reaction</Checkbox>
        <Checkbox>Action</Checkbox>
        <Checkbox>Bonus</Checkbox>
        <Checkbox>Free</Checkbox>
      </Stack>
    </Card>
  )
}

export default PlayerRoundActions
