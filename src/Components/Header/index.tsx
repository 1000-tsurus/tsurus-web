import { useEffect, useState } from 'react'
import { Toolbar, useMediaQuery } from '@mui/material'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { All } from './style'
import { useAuth } from '@/Hooks/auth'
import * as FiIcons from 'react-icons/fi'
import icon from '@/Assets/Logos/1000_tsurus2.png'

const Header = () => {
    const { user, signOut } = useAuth(),
        [isLogged, setIsLogged] = useState(!(!user || Object.keys(user).length === 0 && user.constructor === Object)),
        isMobile = useMediaQuery('(max-width: 450px)')

    useEffect(() => {
        setIsLogged(!(!user || Object.keys(user).length === 0 && user.constructor === Object))
    }, [user])

    return (
        <All>
            <div className='left'>
                <Link to='/' replace={true}><img src={icon} /></Link>
            </div>
            <div className='right'>
                <Link to={isLogged ? `/user/${user.id}` : '/login'}>
                    <AiIcons.AiOutlineUser className='icon' />
                    {!isMobile && (
                        <>
                            {isLogged ? (
                                <p className='login' title='Deseja ir para a página do usuário?'>
                                    Olá, <strong> {user.full_name || 'Usuário'}</strong>
                                </p>
                            ) : (
                                <p className='login sublimed' title='Deseja fazer Login?'>Login</p>
                            )}
                        </>
                    )}
                </Link>
                {isLogged && (
                    <div className='logOut' title='Deseja deslogar?' onClick={signOut}>
                        <FiIcons.FiLogOut/>
                    </div>
                )}
                <Toolbar variant='dense' title='Muda de tema escuro para claro'>
                    <DarkModeToggle />
                </Toolbar>
            </div>
        </All>
    )
}

export default Header
