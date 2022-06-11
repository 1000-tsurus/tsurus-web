import { api } from '@/Services/api'
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type Props = {
    children?: React.ReactNode
}

type SignInCredentials = {
    email: string
    password: string
}

export type User = {
    user: any
    token: string
}

type resetPassword = {
    password: string
    password_confirmation: string
    userId: number
}

export type AuthContextData = {
    user: any
    token: string
    loading: boolean
    signIn(credentials: SignInCredentials): Promise<void>
    signOut(): void
    resetPassword(data: resetPassword): Promise<void>
    updateAuthData(): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: Props) => {
    const [data, setData] = useState<User>({
            user: JSON.parse(localStorage.getItem('@Tsurus:user') || '{}'),
            token: JSON.parse(localStorage.getItem('@Tsurus:token') || '{}')
        }),
        [loading, setLoading] = useState(false),
        navigate = useNavigate(),
        location = useLocation()

    useEffect(() => {
        const token = localStorage.getItem('@Tsurus:token'),
            user = localStorage.getItem('@Tsurus:user')

        if (token && user) {
            setData({
                user: JSON.parse(user),
                token: JSON.parse(token)
            })

            if (location.pathname === '/login') navigate('/', { replace: true })
        }
    }, [])

    const signIn = useCallback(async ({ email, password }) => {
        try {
            setLoading(true)

            const response = await api.post<any>('auth/login', {
                email,
                password,
            })

            if (response.data) {
                const { token, user } = response.data

                if (token && user) {
                    localStorage.setItem('@Tsurus:token', JSON.stringify(token))
                    localStorage.setItem('@Tsurus:user', JSON.stringify(user))

                    setData({ token, user })
                    setLoading(false)

                    navigate('/', { replace: true })
                } else {
                    toast.error('Erro ao realizar o login.', { theme: 'colored' })
                }
            }
        } catch (error: any) {
            setLoading(false)

            if (error.response.status === 403) {
                toast.error('Usuário desabilitado!', { theme: 'colored' })
            } else {
                toast.error('E-mail ou Senha incorretos', { theme: 'colored' })
            }
        }
    }, [])

    const signOut = useCallback(async () => {
        localStorage.removeItem('@Tsurus:token')
        localStorage.removeItem('@Tsurus:user')

        setData({} as User)
        navigate('/', { replace: true })
    }, [])

    const resetPassword = useCallback(async ({ password, password_confirmation, userId }: resetPassword) => {
        setLoading(true)

        api.post(`auth/reset-password/${userId}`, {
            password,
            password_confirmation
        })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(err => {
                const errors = err.response.data.errors[0]
                if (errors.rule === 'confirmed') {
                    alert()
                }
            })
            .finally(() => setLoading(false))
    }, [])

    const updateAuthData = useCallback(async () => {
        setLoading(true)

        const token = JSON.parse(localStorage.getItem('@Auth:token') || '')

        api.get<any>('auth/get-user-data')
            .then(({ data }) => {
                let user = data
                localStorage.setItem('@Auth:user', JSON.stringify(user))

                setData({ token, user })
                setLoading(false)
            })
            .catch(err => {
                toast('E-mail ou Senha incorretos', { theme: 'colored' })
            })
            .then(() => setLoading(false))
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user: data.user || {},
                loading,
                signIn,
                signOut,
                token: data.token,
                resetPassword,
                updateAuthData
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
