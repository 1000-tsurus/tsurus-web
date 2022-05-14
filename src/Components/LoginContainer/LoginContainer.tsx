import { api } from '@/Services/api'
import { CircularProgress } from '@mui/material'
import React, { createElement, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { All } from './style'

export default function LoginContainer() {
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [loading, setLoading] = useState(false),
        navigator = useNavigate(),
        handleSubmit = () => {
            setLoading(true)
            api.post('auth/login', {
                email,
                password
            })
                .then(res => {
                    for (let key in res.data) {
                        localStorage.setItem(
                            `Tsurus@${key}`,
                            typeof res.data[key] === 'object' ? JSON.stringify(res.data[key]) : res.data[key]
                        )
                    }
                    navigator('/home')
                    toast.success('Login realizado com sucesso!', { theme: 'colored' })
                })
                .catch(err => {
                    toast.error('Campo senha ou email inválido(s)', { theme: 'colored' })
                    console.log(err)
                })
                .finally(() => {
                    setLoading(false)
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
                    <button type='submit' className='btn' onClick={handleSubmit} disabled={!(!!password && !!email)}>
                        {loading ? <CircularProgress size={12} style={{ color: '#fff' }} /> : 'Entrar'}
                    </button>
                    <aside>
                        <Link className='notRegistered' to='/register'>
                            Não é registrado ainda? <b>Registre-se</b>
                        </Link>
                        <Link className='forgotPassword' to='/forgot-password'>
                            <b>Esqueci minha senha</b>
                        </Link>
                    </aside>
                </div>
            </div>
            <div className='imgContainer'>{/* <span>Image</span> */}</div>
        </All>
    )
}
