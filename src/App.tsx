import { useContext } from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import Header from '@/Components/Header'
import { GlobalStyle } from './Styles/GlobalStyle'
import { ChosenTheme } from './providers'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'

const Root = styled.div<{theme: 'dark' | 'light'}>`
    padding-top: 50px;
    & a {
        text-decoration: none;
        color: ${({ theme }) => theme === 'dark' ? '#ffffffcc' : '#000'};
    }
`

const App = () => {
    let { theme } = useContext(ChosenTheme)
    return (
        <Root theme={theme}>
            <Header />
            <div style={{marginTop:'20px'}}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </div>
            <GlobalStyle />
        </Root>
    )
}

export default App
