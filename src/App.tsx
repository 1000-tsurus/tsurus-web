import { useContext } from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import Header from '@/Components/Header'
import { GlobalStyle } from './Styles/GlobalStyle'
import { ChosenTheme } from './providers'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import User from './Pages/User/User'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const Root = styled.div<{ theme: 'dark' | 'light' }>`
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
            <div
                style={{
                    marginTop: '20px',
                    minHeight: 'calc(100vh - 60px)'
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/user/:id" element={<User />} />
                </Routes>
            </div>
            <Footer />
            <ToastContainer/>
            <GlobalStyle />
        </Root>
    )
}

export default App
