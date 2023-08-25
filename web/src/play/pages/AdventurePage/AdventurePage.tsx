import { Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdventurePage = () => {
  return (
    <>
      <MetaTags title="Adventure" description="Adventure page" />

      <Text>Overview information for the adventure you are playing!</Text>
    </>
  )
}

export default AdventurePage
