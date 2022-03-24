import { useContext, useEffect, useState } from 'react'
import { ChosenTheme } from '@/providers'
import { AppBar, Toolbar, useMediaQuery } from '@mui/material'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'

import icon from '../../Assets/Logos/logo_horizontal.png'
import DarkModeToggle from './DarkModeToggle'
import { All } from './style'

const Header = () => {
    const { theme } = useContext(ChosenTheme),
        [isLogged, setIsLogged] = useState(false),
        [userName, setUserName] = useState<string | null>(),
        isMobile = useMediaQuery('(max-width: 450px)')

    useEffect(() => {
        let haveUser = localStorage.getItem('Tsurus@user')
        if (haveUser) {
            setIsLogged(true)
            setUserName(JSON.parse(haveUser))
        }
    }, [])

    return (
        <All
            theme={theme}
        >
            <div className='left'>
                {/* <Link to='/home'><img src={icon} /></Link> */}
            </div>
            <div className='right'>
                <Link to={isLogged ? '/user' : '/login'}>
                    <AiIcons.AiOutlineUser className='icon' />
                    {!isMobile && <>
                        {isLogged ?
                            <p className="login">Olá, <strong> {userName || 'Usuário'}</strong></p>
                            :
                            <p className="login sublimed">Login</p>
                        }
                    </>}
                </Link>
                <Toolbar variant='dense' title='Muda de tema escuro para claro'>
                    <DarkModeToggle />
                </Toolbar>
            </div>
        </All>
    )
}

export default Header
