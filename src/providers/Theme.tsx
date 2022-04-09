import React, { createContext, ReactNode, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/Styles/theme'

export type ThemeContextData = {
    toggleTheme(theme: 'dark' | 'light'): void
    selectedTheme: DefaultTheme
}

type Props = {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const ThemeContextProvider = ({ children }: Props) => {
    const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(lightTheme)

    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem('@Theme')

        if (savedTheme) {
            setSelectedTheme(savedTheme === 'light' ? lightTheme : darkTheme)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('Tsurus@theme', selectedTheme.title)
    }, [selectedTheme])

    const toggleTheme = useCallback(async (theme: 'dark' | 'light') => {
        setSelectedTheme(theme === 'light' ? lightTheme : darkTheme)
    }, [])

    return (
        <ThemeContext.Provider value={{ toggleTheme, selectedTheme }}>
            <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}

// Custom hook para alterar o tema e verificar o atual
export const useToggleTheme = (): ThemeContextData => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('O Hook useToggleTheme deve ser usado dentro de um ThemeContextProvider!!')
    }

    return context
}
