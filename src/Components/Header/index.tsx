import { AppBar, Toolbar } from '@mui/material'

import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default Header
