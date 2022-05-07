import { api } from '@/Services/api'
import React, { createElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { All } from './style'

export default function LoginContainer() {
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        navigator = useNavigate(),
        handleSubmit = () => {
            api.post('auth/login', {
                email,
                password
            }).then(res => {
                for (let key in res.data) {
                    localStorage.setItem(
                        `Tsurus@${key}`,
                        typeof res.data[key] === 'object' ? JSON.stringify(res.data[key]) : res.data[key]
                    )
                }
            })
        }

    return (
        <All>
            <div className='loginContainer' id='loginContainer'>
                <h1>Login</h1>
                <label>Seu email</label>
                <input type='text' onChange={e => setEmail(e.target.value)} />
                <label>Sua senha</label>
                <input type='password' onChange={e => setPassword(e.target.value)} />
                <div className='btn'>
                    <button type='submit' className='btn' onClick={handleSubmit}>
                        Entrar
                    </button>
                    {/* <button className='forgotPassword' onClick={handleForgotPassword}>
                        Esqueci minha senha
                    </button> */}
                </div>
            </div>
            <div className='imgContainer'>{/* <span>Image</span> */}</div>
        </All>
    )
}
