import { useEffect, useState } from 'react'
import { Toolbar, useMediaQuery } from '@mui/material'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { All } from './style'

const Header = () => {
    const [isLogged, setIsLogged] = useState(false),
        [userName, setUserName] = useState<string | null>(),
        isMobile = useMediaQuery('(max-width: 450px)')

    useEffect(() => {
        let haveUser = localStorage.getItem('Tsurus@user')
        if (haveUser) {
            setIsLogged(true)
            setUserName(JSON.parse(haveUser).full_name)
        }
    }, [])

    return (
        <All>
            <div className='left'>{/* <Link to='/home'><img src={icon} /></Link> */}</div>
            <div className='right'>
                <Link to={isLogged ? '/user' : '/login'}>
                    <AiIcons.AiOutlineUser className='icon' />
                    {!isMobile && (
                        <>
                            {isLogged ? (
                                <p className='login'>
                                    Olá, <strong> {userName || 'Usuário'}</strong>
                                </p>
                            ) : (
                                <p className='login sublimed'>Login</p>
                            )}
                        </>
                    )}
                </Link>
                <Toolbar variant='dense' title='Muda de tema escuro para claro'>
                    <DarkModeToggle />
                </Toolbar>
            </div>
        </All>
    )
}

export default Header
