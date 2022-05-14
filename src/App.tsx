import React, { useContext } from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import Header from '@/Components/Header'
import { GlobalStyle } from './Styles/GlobalStyle'
import { ThemeContext } from './providers/Theme'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { isMobile } from 'react-device-detect'

const Login = React.lazy(() => import('./Pages/Login/Login').then(module => ({ default: module.default })))
//const ForgotPassword = React.lazy(() =>
//import('./Pages/ForgotPassword/ForgotPassword').then(module => ({ default: module.default }))
//)
const User = React.lazy(() => import('./Pages/User/User').then(module => ({ default: module.default })))
const Register = React.lazy(() => import('./Pages/Register/Register').then(module => ({ default: module.default })))
const Home = React.lazy(() => import('./Pages/Home/Home').then(module => ({ default: module.default })))

const Root = styled.div`
    padding-top: 50px;
    & a {
        text-decoration: none;
        color: ${({ theme }) => (theme.title === 'dark' ? '#ffffffcc' : '#000')};
    }
`

const App = () => {
    switch (isMobile) {
        case true:
            return (
                <div>
                    Nosso app Mobile ainda está em desevolvimento, por favor aguarde nosso time de desenvolvimento😁
                </div>
            )
        default:
            return (
                <Root>
                    <Header />
                    <div
                        style={{
                            marginTop: '20px',
                            minHeight: 'calc(100vh - 60px)'
                        }}
                    >
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            {
                                //<Route path='/forgot-password' element={<ForgotPassword />} />
                            }
                            <Route path='/register' element={<Register />} />
                            <Route path='/user' element={<User />} />
                            <Route path='/user/:id' element={<User />} />
                        </Routes>
                    </div>
                    <Footer />
                    <ToastContainer />
                    <GlobalStyle />
                </Root>
            )
    }
}

export default App
