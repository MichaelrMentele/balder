// Re-exports icons from chakra-ui/icons and mixes them with custom icons
import { Icon } from '@chakra-ui/react'
// to abstract the difference away
export * from '@chakra-ui/icons'
export { MenuIcon } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'

export const HomeIcon = () => <Icon as={FaHome} />
