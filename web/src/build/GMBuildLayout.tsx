import React, { ReactNode } from 'react'
import { ReactText } from 'react'

import {
  IconButton,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  useToken,
  Divider,
  Select,
  VStack,
} from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import { MenuIcon, HomeIcon } from 'src/components/Icons/Icons'

interface LinkItemProps {
  name: string
  icon: ReactNode
  route: () => string
}

// TODO: nice to have some icons here
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: HomeIcon, route: routes.home },
  { name: 'Journal', icon: HomeIcon, route: routes.home },
  { name: 'Encounters', icon: HomeIcon, route: routes.playerCombat },
  { name: 'Settings', icon: HomeIcon, route: routes.settings },
]

/*
 * SidebarContent for infrequent items such as profile and app settings
 */
const Footer = {}

/*
 * Link items that are infrequently used such level up, rest, etc.
 */
const DownTimeLinkItems = {}

export function StandardLayout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [gray100] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.red.100`
    ['gray.100']
    // a single fallback or fallback array matching the length of the previous arg
  )
  return (
    <Box minH="100vh" bg={gray100}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <VStack
        h="20"
        direction={'column'}
        alignItems="left"
        mx="4"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Balder
        </Text>
        <Select placeholder="Select Adventure"></Select>
        <NavItem
          key={'adventure'}
          icon={HomeIcon}
          onClick={() => navigate(routes.adventure())}
        >
          {'Adventure'}
        </NavItem>
        <NavItem
          key={'play'}
          icon={HomeIcon}
          onClick={() => navigate(routes.play())}
        >
          {'Play'}
        </NavItem>
        <NavItem
          key={'map'}
          icon={HomeIcon}
          onClick={() => navigate(routes.map())}
        >
          {'Map'}
        </NavItem>
        <NavItem
          key={'party'}
          icon={HomeIcon}
          onClick={() => navigate(routes.party())}
        >
          {'Party'}
        </NavItem>
        <Divider />
        <NavItem
          key={'journal'}
          icon={HomeIcon}
          onClick={() => navigate(routes.journal())}
        >
          {'Journal'}
        </NavItem>
        <NavItem
          key={'characters'}
          icon={HomeIcon}
          onClick={() => navigate(routes.characters())}
        >
          {'Characters'}
        </NavItem>
        <Divider />
        <NavItem
          key={'settings'}
          icon={HomeIcon}
          onClick={() => navigate(routes.settings())}
        >
          {'Settings'}
        </NavItem>
      </VStack>
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: ReactNode
  children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'magenta.400',
          color: 'white',
        }}
        {...rest}
      >
        {/* // TODO fix this -- bug */}
        {/* {icon && (
          <MenuIcon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )} */}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={null}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Balder
      </Text>
    </Flex>
  )
}

export default StandardLayout
