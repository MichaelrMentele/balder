import {
  VStack,
  Grid,
  GridItem,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Text,
  List,
  ListItem,
  background,
  Button,
} from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import Card from 'src/components/Card/Card'

const CharacterListItem = ({ id, name }) => {
  return (
    <Card
      cursor={'pointer'}
      _hover={{ background: 'red' }}
      backgroundColor="lightgray"
      width="100%"
      onClick={() => navigate(routes.characterEdit({ id: id }))}
    >
      <Text>{name}</Text>
    </Card>
  )
}

const TestCharacter = {
  id: 1,
  name: 'Test Character',
}

const Characters = () => {
  return (
    <>
      <VStack>
        {[TestCharacter].map((character) => (
          <CharacterListItem key={character.id} {...character} />
        ))}
      </VStack>
      <Button onClick={() => navigate(routes.characterCreate())}>
        Add Character
      </Button>
    </>
  )
}

export default Characters
