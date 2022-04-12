import React, { createElement, useState } from 'react'
import { All } from'./style'

export default function LoginContainer() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event: any) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event: any) => {
        setPassword(event.target.value)
    }

    const loginSucess = (event: any) => {
        if(password.length >= 8) {
            alert('Login Success')
        }

        return alert('Login Failure')
    }

    const handleForgotPassword = (event: any) => {
        const hidden = document.getElementById('loginContainer')
    }

    return (
        <All>
            <div className="loginContainer" id="loginContainer">
                <h1>Login</h1>
                <label>Seu email</label>
                <input type="text" onChange={handleEmail}/>
                <label>Sua senha</label>
                <input type="password" onChange={handlePassword}/>
                <div className="btn">
                    <button type="submit" className="btn" onClick={loginSucess}>Entrar</button>
                    <button className="forgotPassword" onClick={handleForgotPassword}>Esqueci minha senha</button>
                </div>
            </div>
            <div className="imgContainer">
                <span>Image</span>
            </div>
        </All>
    )
}


