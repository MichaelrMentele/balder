import {
  HStack,
  VStack,
  Stack,
  Heading,
  Box,
  useToken,
  Container,
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
} from '@chakra-ui/react'

import Card from 'src/components/Card/Card'
import Conditions from 'src/components/Conditions/Conditions'
import Hands from 'src/components/Hand/Hand'
import PlayerActionsPool from 'src/components/PlayerActionsPool/PlayerActionsPool'
import PlayerInventory from 'src/components/PlayerInventory/PlayerInventory'
import PlayerRoundActions from 'src/components/PlayerRoundActions/PlayerRoundActions'
import Saves from 'src/components/Saves/Saves'
import Skills from 'src/components/Skills/Skills'

const PlayerCombatPage = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6} maxW="100vw">
      <GridItem colSpan={2}>
        <VStack alignItems="top">
          <PlayerRoundActions />
          <Conditions />
          <Saves />
          <Hands />
        </VStack>
      </GridItem>
      <GridItem colSpan={2}>
        <Skills />
      </GridItem>
      <GridItem colSpan={2}>
        <PlayerActionsPool actions={[]} />
      </GridItem>
    </Grid>
  )
}

export default PlayerCombatPage
