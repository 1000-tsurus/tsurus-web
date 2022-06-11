import { useAuth } from '@/Hooks/auth'
import { useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const AuthRoute = () => {
    const { token, loading, user } = useAuth()
    const location = useLocation()

    const { updateAuthData } = useAuth(),
        { id } = localStorage.getItem('@Auth:user') ? JSON.parse(localStorage.getItem('@Auth:user') ?? '') : '',
        did_reset = () => {
            updateAuthData()
        }

    let the_return = null

    if (loading) {
        the_return = <h1>CARREGANDO</h1>
    }

    if (user && Object.keys(user).length > 0 && !!token) {
        // inserir aqui o código para redirecionamento para a rota que ele pode estar
    } else {
        the_return = <Navigate to='/login' state={{ from: location }} />
    }

    return the_return
}
