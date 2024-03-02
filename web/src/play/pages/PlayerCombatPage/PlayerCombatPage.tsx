import {
  VStack,
  Grid,
  GridItem,
  Heading,
  Tabs,
  TabPanels,
  TabPanel,
  Wrap,
  WrapItem,
  Avatar,
  HStack,
} from '@chakra-ui/react'

import Card from 'src/components/Card/Card'
import Conditions from 'src/components/Conditions/Conditions'
import Hands from 'src/components/Hand/Hand'
import PlayerActionsPool from 'src/components/PlayerActionsPool/PlayerActionsPool'
import PlayerRoundActions from 'src/components/PlayerRoundActions/PlayerRoundActions'
import Skills from 'src/components/Skills/Skills'

// TODO this whole set of panels is always in the context of a player right?
const PlayerCombatPanel = () => (
  <Grid templateColumns="repeat(6, 1fr)" gap={6} maxW="100vw">
    <GridItem colSpan={2}>
      <Skills />
    </GridItem>
    <GridItem colSpan={2}>
      <PlayerActionsPool actions={[]} />
    </GridItem>
    <GridItem colSpan={2}>
      <VStack alignItems="top">
        <PlayerRoundActions />
        <Conditions />
        {/* <Saves /> */}
        <Hands />
      </VStack>
    </GridItem>
  </Grid>
)

const TurnTracker = () => {
  return (
    <Card>
      <VStack alignItems="left">
        <Heading as="h3" size="md">
          Turn Order
        </Heading>
        <HStack>
          <Wrap>
            <WrapItem>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </WrapItem>
            <WrapItem>
              <Avatar
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
              />
            </WrapItem>
            <WrapItem>
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            </WrapItem>
            <WrapItem>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            </WrapItem>
            <WrapItem>
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
            </WrapItem>
            <WrapItem>
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </WrapItem>
            <WrapItem>
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            </WrapItem>
          </Wrap>
        </HStack>
      </VStack>
    </Card>
  )
}

const PlayerCombatPage = () => {
  return (
    <>
      <Tabs variant="solid-rounded">
        <TurnTracker />
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
        <PlayerCombatPanel />
      </Tabs>
    </>
  )
}

export default PlayerCombatPage
