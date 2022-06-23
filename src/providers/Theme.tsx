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
        const savedTheme = localStorage.getItem('Tsurus@theme')

        if (savedTheme) {
            setSelectedTheme(savedTheme === 'light' ? lightTheme : darkTheme)
        }
    }, [])

    useEffect(() => {
        console.log("🚀 ~ file: Theme.tsx ~ line 29 ~ useEffect ~ selectedTheme.title", selectedTheme.title)
        localStorage.setItem('Tsurus@theme', selectedTheme.title)
    }, [selectedTheme])

    const toggleTheme = useCallback(async (theme: 'dark' | 'light') => {
        console.log("🚀 ~ file: Theme.tsx ~ line 34 ~ toggleTheme ~ theme", theme)
        setSelectedTheme(theme === 'light' ? lightTheme : darkTheme)
    }, [])

    return (
        <ThemeContext.Provider value={{ toggleTheme, selectedTheme }}>
            <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useToggleTheme = (): ThemeContextData => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('DEV: Hook useToggleTheme deve ser usado dentro do ThemeContextProvider!')
    }

    return context
}
