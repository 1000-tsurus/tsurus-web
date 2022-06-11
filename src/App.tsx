import React, { Suspense, useContext } from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import Header from '@/Components/Header'
import { GlobalStyle } from './Styles/GlobalStyle'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { isMobile } from 'react-device-detect'
import { AuthProvider } from '@/Contexts/auth'
import { MainRoutes } from '@/Routes'

const Login = React.lazy(() => import('./Pages/Login/Login').then(module => ({ default: module.default })))
const ForgotPassword = React.lazy(() =>
    import('./Pages/ForgotPassword/ForgotPassword').then(module => ({ default: module.default }))
)
const User = React.lazy(() => import('./Pages/User/User').then(module => ({ default: module.default })))
const Register = React.lazy(() => import('./Pages/Register/Register').then(module => ({ default: module.Register })))
const Home = React.lazy(() => import('./Pages/Home/Home').then(module => ({ default: module.default })))

const Root = styled.div`
    padding-top: 50px;
    & a {
        text-decoration: none;
        color: ${({ theme }) => (theme.title === 'dark' ? '#ffffffcc' : '#000')};
    }
`

const App = () => {
    return <MainRoutes />
}

export default App
