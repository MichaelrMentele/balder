import { Flex, useToken } from '@chakra-ui/react'

const Card = ({ children, ...props }) => {
  const [radius] = useToken('radii', ['xl'])
  const [white] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.red.100`
    ['white']
    // a single fallback or fallback array matching the length of the previous arg
  )

  return (
    <Flex
      grow={1}
      h="100%"
      py="2"
      px="4"
      bg={white}
      borderRadius={radius}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Card
