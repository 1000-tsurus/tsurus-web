import { useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/Brightness3'
import LightModeIcon from '@mui/icons-material/WbSunny'

import { ThemeContext } from '@/Providers'
import { Ball, Checkbox, Label, MoonIcon, Root, SunIcon } from './style'

const DarkModeToggle = () => {
    const { selectedTheme, toggleTheme } = useContext(ThemeContext)
    console.log('🚀 ~ file: DarkModeToggle.tsx ~ line 10 ~ DarkModeToggle ~ selectedTheme', selectedTheme)
    return (
        <Root>
            <Checkbox
                type='checkbox'
                id='dark-mode-toggle'
                checked={selectedTheme.title === 'dark'}
                onChange={({ target: { checked } }) => {
                    const themeToSet = checked ? 'dark' : 'light'
                    toggleTheme(themeToSet)
                }}
            />
            <Label htmlFor='dark-mode-toggle'>
                <MoonIcon>
                    <DarkModeIcon color='inherit' fontSize='small' />
                </MoonIcon>
                <SunIcon>
                    <LightModeIcon color='inherit' fontSize='small' />
                </SunIcon>
                <Ball isChecked={selectedTheme.title === 'dark'} />
            </Label>
        </Root>
    )
}

export default DarkModeToggle
