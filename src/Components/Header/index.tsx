import { useContext, useState } from 'react'
import { ChosenTheme } from '@/providers'
import { AppBar, Toolbar } from '@mui/material'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'

import icon from '../../Assets/Logos/logo_horizontal.png'
import DarkModeToggle from './DarkModeToggle'
import { All } from './style'

const Header = () => {
  const { theme } = useContext(ChosenTheme)

  return (
    <All
      theme={theme}
    >
      <div className='left'>
        <img src={icon} />
      </div>
      <div className='right'>
        <Link to='/login'>
          <AiIcons.AiOutlineUser className='icon' />
          <p className="login">Olá, <strong> Marcelin!</strong></p>
        </Link>
        <Toolbar variant='dense'>
          <DarkModeToggle />
        </Toolbar>
      </div>
    </All>
  )
}

export default Header
