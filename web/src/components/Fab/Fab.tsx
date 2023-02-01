import { Button } from '@chakra-ui/react'

const Fab = ({ content, ...props }) => {
  return (
    <Button position="fixed" bottom="3" right="3" {...props}>
      {content}
    </Button>
  )
}

export default Fab
