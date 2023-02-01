import { Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PartyPage = () => {
  return (
    <>
      <MetaTags title="Party" description="Party page" />
      <Text>Overview information for the party you are playing with!</Text>
    </>
  )
}

export default PartyPage
