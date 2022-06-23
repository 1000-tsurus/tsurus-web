import { useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/Brightness3'
import LightModeIcon from '@mui/icons-material/WbSunny'

import { Ball, Checkbox, Label, MoonIcon, Root, SunIcon } from './style'
import { ThemeContext } from '@/Providers'

const DarkModeToggle = () => {
    const { selectedTheme, toggleTheme } = useContext(ThemeContext)
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
