import React from 'react'
import { CodeInputStyled } from './style'
import { Container } from './style'
import { All } from './style'
import ForgotPasswordSvg from '../../../Assets/img/Forgot password-rafiki.svg'

export default function ReactCodeInput() {
    return (
        <All>
            <Container>
                <img className='svg-image' src={ForgotPasswordSvg} />
                <h1> Insira o código </h1>
                <CodeInputStyled inputMode='numeric' name='code' />
                <p> Um código de recuperação foi enviado ao e-mail informado </p>
            </Container>
        </All>
    )
}
