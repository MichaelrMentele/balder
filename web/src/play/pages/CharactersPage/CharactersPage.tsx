import { Text, Button } from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import List from 'src/components/List/List'
import ListItem from 'src/components/List/ListItem'

const TestCharacter = {
  id: 1,
  name: 'Test Character',
}

const Characters = () => {
  const onClick = () => navigate(routes.characterEdit({ id: id }))
  return (
    <>
      <List>
        {[TestCharacter].map((character) => (
          <ListItem key={character.id} onClick={onClick}>
            <Text>{character.name}</Text>
          </ListItem>
        ))}
      </List>
      <Button onClick={() => navigate(routes.characterCreate())}>
        Add Character
      </Button>
    </>
  )
}

export default Characters
