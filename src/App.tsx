import React, { Suspense, useContext } from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import Header from '@/Components/Header'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '@/Contexts/auth'
import { MainRoutes } from '@/Routes'

const App = () => {
    return (
        <AuthProvider>
            <MainRoutes />
        </AuthProvider>
    )
}

export default App
