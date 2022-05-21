import { useCallback, useState } from 'react'

/**
 * Hook para manipulação do localStorage, utilização idêntica ao "useState"
 * @param {string} key Chave do localStorage
 * @param {any} initialValue Valor inicial do localStorage
 */
export const useLocalStorage = <T extends unknown>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key)

            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = useCallback(
        (value: T) => {
            try {
                setStoredValue(value)

                window.localStorage.setItem(key, JSON.stringify(value))
            } catch (error) {
                console.log(error)
            }
        },
        [key]
    )

    return [storedValue, setValue] as const
}
