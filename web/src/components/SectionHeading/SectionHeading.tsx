import { Heading } from '@chakra-ui/react'

const SectionHeading = ({ children }) => {
  return (
    <Heading as="h2" size="md">
      {children}
    </Heading>
  )
}

export default SectionHeading
