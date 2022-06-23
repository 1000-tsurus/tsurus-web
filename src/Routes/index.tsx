import React, { Suspense } from 'react'
import Header from '@/Components/Header'
import { GlobalStyle } from '../Styles/GlobalStyle'
import Footer from '../Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { isMobile } from 'react-device-detect'
import { useAuth } from '@/Hooks/auth'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import MobileScreen from '../Pages/MobileScreen/MobileScreen'
import { Loading } from '@/Components/Loading'

// Lazy Imports
const Login = React.lazy(() => import('../Pages/Login/Login').then(module => ({ default: module.default })))
const ForgotPassword = React.lazy(() =>
    import('../Pages/ForgotPassword/ForgotPassword').then(module => ({ default: module.default }))
)
const User = React.lazy(() => import('../Pages/User/User').then(module => ({ default: module.default })))
const Register = React.lazy(() => import('../Pages/Register/Register').then(module => ({ default: module.Register })))
const Home = React.lazy(() => import('../Pages/Home/Home').then(module => ({ default: module.default })))

const Root = styled.div`
    padding-top: 50px;
    & a {
        text-decoration: none;
        color: ${({ theme }) => (theme.title === 'dark' ? '#ffffffcc' : '#000')};
    }
`

export const MainRoutes = () => {
    const { user } = useAuth()

    switch (isMobile) {
        case true:
            return <MobileScreen />
        default:
            return (
                <Root>
                    <Header />
                    <div
                        style={{
                            marginTop: '20px',
                            minHeight: 'calc(100vh - 60px)',
                        }}
                    >
                        <Suspense fallback={<Loading/>}>
                            <Routes>
                                <Route path='/loading' element={<Loading />} />
                                <Route path='/' element={<Home />} />
                                <Route path='/home' element={<Home />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/forgot-password' element={<ForgotPassword />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/user' element={<User />} />
                                <Route path='/user/:userId' element={<User />} />
                            </Routes>
                        </Suspense>
                    </div>
                    <Footer />
                    <ToastContainer />
                    <GlobalStyle />
                </Root>
            )
    }
}
