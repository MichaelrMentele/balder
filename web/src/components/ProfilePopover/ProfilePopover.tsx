import { Avatar, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'

import { Link } from '@redwoodjs/router'

export const ProfilePopover = () => {
  return (
    <Menu placement="right-start">
      <MenuButton>
        <Avatar name="My Name" src={''} />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link to="/build">Build</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/play">Play</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/bazaar">Bazaar</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/profile">Profile</Link>
        </MenuItem>
        {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}
      </MenuList>
    </Menu>
  )
}
