import { Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

/*
 * Has a secondary navigation of the journal entries through time. When selected, the journal
 * entry is displayed in the main content area.
 */

const JournalPage = () => {
  return (
    <>
      <MetaTags title="Journal" description="Journal page" />
      <Text>Record notes about your adventure</Text>
    </>
  )
}

export default JournalPage
