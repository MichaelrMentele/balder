import { Text } from '@chakra-ui/react'

import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Card from 'src/components/Card/Card'
import List from 'src/components/List/List'
import ListItem from 'src/components/List/ListItem'

type Turnable = {
  id: number
  name: string
  initiative: number
}

type Encounter = {
  id: number
  name: string
}

/**
 *
 * This page is the view of the adventures.
 *
 * Roles:
 * - GM: Can create, edit, and delete encounters
 */
const EncountersPage = () => {
  const encounters = [
    {
      id: 1,
      name: 'Goblin Fight',
    },
  ]
  const onClick = (encounter) =>
    navigate(routes.encounter({ id: encounter.id }))
  return (
    <>
      <MetaTags title="Encounters" description="Has a list of encounters" />
      <h1>Encounters</h1>
      <List>
        {encounters.map((encounter) => (
          <Card key={encounter.id} onClick={onClick}>
            <Text>{encounter.name}</Text>
          </Card>
        ))}
      </List>
    </>
  )
}

export default EncountersPage
