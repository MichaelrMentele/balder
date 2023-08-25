import { Text } from '@chakra-ui/react'

import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import List from 'src/components/List/List'
import ListItem from 'src/components/List/ListItem'

/**
 *
 * This page is the view of the adventures.
 *
 * Roles:
 * - GM: Can create, edit, and delete adventures
 * - Player: Can view assigned adventures
 */
const AdventurePage = () => {
  const adventures = []
  const onClick = (adventure) =>
    navigate(routes.adventure({ id: adventure.id }))
  return (
    <>
      <MetaTags title="Adventure" description="Adventure page" />

      <List>
        {adventures.map((adventure) => (
          <ListItem key={adventure.id} onClick={onClick}>
            <Text>{adventure.name}</Text>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default AdventurePage
