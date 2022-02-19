import { FC, useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/Brightness3'
import LightModeIcon from '@mui/icons-material/WbSunny'

import { ChosenTheme } from '@/providers'
import { 
    Ball, 
    Checkbox, 
    Label, 
    MoonIcon, 
    Root, 
    SunIcon 
} from './style'

const DarkModeToggle: FC = () => {
    const { theme, setTheme } = useContext(ChosenTheme)
    return (
        <Root>
            <Checkbox
                type='checkbox'
                id='dark-mode-toggle'
                checked={theme === 'dark'}
                onChange={({ target: { checked } }) => {
                    const themeToSet = checked ? 'dark' : 'light'
                    setTheme(themeToSet)
                }}
            />
            <Label htmlFor='dark-mode-toggle'>
                <MoonIcon>
                    <DarkModeIcon color='inherit' fontSize='small' />
                </MoonIcon>
                <SunIcon>
                    <LightModeIcon color='inherit' fontSize='small' />
                </SunIcon>
                <Ball isChecked={theme === 'dark'} />
            </Label>
        </Root>
    )
}
interface BallProps {
    isChecked: boolean
}

export default DarkModeToggle
