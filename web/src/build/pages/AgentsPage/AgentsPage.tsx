import { List, Text } from '@chakra-ui/react'

import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Card from 'src/components/Card/Card'

type Agent = {
  id: number
  name: string
}

/** Roles:
 * - GM: Can createII, edit, and delete agents
 *
 * Agents can be created from a template or from scratch.
 *
 * Templates are created by the GM and can be used to create new agents quickly.
 * If agents are not long lived, the agent template is used for encounter building
 * for "throwaway" agents. These agents have a generated memory and shallow backstory.
 */
const AgentsPage = () => {
  const agents: Agent[] = [
    {
      id: 1,
      name: '',
    },
  ]
  const onClick = (agents) => navigate(routes.agent({ id: agent.id }))
  return (
    <>
      <MetaTags title="Agents" description="Has a list of agents" />
      <h1>Encounters</h1>
      <List>
        {agents.map((agent) => (
          <Card key={agent.id} onClick={onClick}>
            <Text>{agent.name}</Text>
          </Card>
        ))}
      </List>
    </>
  )
}

export default AgentsPage
