import { AuthContext, AuthContextData } from '@/Contexts/auth'
import { useContext } from 'react'

export const useAuth = (): AuthContextData => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('O Hook useAuth deve ser usado dentro de um AuthProvider!')
    }

    return context
}
